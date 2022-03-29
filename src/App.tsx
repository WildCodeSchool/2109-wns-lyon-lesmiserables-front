import React, { FC, useState } from "react";
import { Layout } from "antd";


import "./App.less";
import SideNav from "./components/SideNav";
import Router from "./config/Router";
const { Content } = Layout;
function App() {
  return (
    <Layout style={{ height: "100vh" }}>
        <Router />
    </Layout>
  );
}

export default App;
