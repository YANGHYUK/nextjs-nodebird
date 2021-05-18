import React from "react";
import propTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
//완전 공통인 부분을 여기에 넣는다.

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Component: propTypes.elementType.isRequired,
};

export default App;
