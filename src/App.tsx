import React, { FC, useState } from "react";
import { Layout } from "antd";
import "./App.less";
import SideNav from "./components/SideNav";
import Router from "./config/Router";
import { AuthProvider } from "./utils/hooks/auth.hook";

const { Content } = Layout;
function App() {
  return (
    <AuthProvider>
      <Layout style={{ height: "100vh" }}>
        <Router />
      </Layout>
    </AuthProvider>
  );
}

export default App;
