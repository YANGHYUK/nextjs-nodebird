import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
const Profile = () => {
  const followerList = [
    { nickname: "이안" },
    { nickname: "천재" },
    { nickname: "노드버드오피셜" },
  ];
  const followingList = [
    { nickname: "밀라쿠니스" },
    { nickname: "브래들리쿠퍼" },
    { nickname: "제임스딘" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />

        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
