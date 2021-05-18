import React, { useState, useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../reducers/user";
const UserProfile = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => ({
    isLoggedIn: state.user.isLoggedIn,

    user: state.user.user,
  }));
  console.log({ isLoggedIn, user });

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹 <br /> 0
        </div>,
        <div key="followings">
          팔로잉 <br /> 0
        </div>,
        <div key="follower">
          팔로워 <br /> 0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>이안</Avatar>} title="Iaan" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
