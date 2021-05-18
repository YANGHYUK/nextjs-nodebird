import React, { useMemo } from "react";
import propTypes from "prop-types";
import { List, Button, Card } from "antd";
import { StopOutlined } from "@ant-design/icons";
const FollowList = ({ header, data }) => {
  const listStyle = useMemo(() => {
    return { marginBottom: 20 };
  }, []);
  const gridStyle = useMemo(() => {
    return { gutter: 4, xs: 2, md: 3, lg: 1 };
  }, []);
  const headerMemo = useMemo(() => {
    return <div>{header}</div>;
  }, []);

  const loadMoreMemo = useMemo(
    () => (
      <div style={{ textAlign: "center", margin: "10px 0" }}>
        <Button>더보기</Button>
      </div>
    ),
    []
  );
  return (
    <List
      style={listStyle}
      grid={gridStyle}
      size="small"
      header={headerMemo}
      loadMore={loadMoreMemo}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item style={{ marginTop: 20 }}>
          <Card actions={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>
      )}
    />
  );
};

FollowList.propTypes = {
  header: propTypes.string.isRequired,
  data: propTypes.array.isRequired,
};
export default FollowList;
