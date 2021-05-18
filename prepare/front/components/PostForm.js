import React, { useState, useCallback, useMemo, useRef } from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../reducers/post";
const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const formStyle = useMemo(() => {
    return { margin: "10px 0 20px" };
  }, []);
  const submitButtonStyle = useMemo(() => {
    return { float: "right" };
  }, []);
  const [text, setText] = useState("");
  const onChangeText = useCallback((e) => {
    const value = e.target.value;
    setText(value);
  });
  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText("");
  }, []);

  const imageInput = useRef(null);

  const onClickImageUpload = useCallback(() => {
    imageInput?.current.click();
  }, [imageInput?.current]);
  return (
    <Form style={formStyle} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 신기한 일이 있었나요?"
      />
      <div>
        <input id="fileButton" type="file" multiple hidden ref={imageInput} />
        <Button htmlFor="fileButton" onClick={onClickImageUpload}>
          이미지 업로드
        </Button>
        <Button type="primary" style={submitButtonStyle} htmlType="submit">
          짹짹
        </Button>
        <div>
          {imagePaths.map((v) => {
            return (
              <div key={v} style={{ display: "inline-block" }}>
                <img src={v} style={{ width: "200px" }} />
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Form>
  );
};

export default PostForm;
