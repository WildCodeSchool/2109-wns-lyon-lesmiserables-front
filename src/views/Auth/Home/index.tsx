import React from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Tabs,
  Input,
  Form,
  Button,
  Row,
  Col,
  Modal,
  Radio,
  Space,
  Divider,
  Table,
  Tag,
} from "antd";
import './homeStyle.css'
const {Content} =Layout;

function index() {
  return (
    <Content>
      <h1>MASTERMINE</h1>
      <p>FOR MASTERCLASS</p>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </Content>
  );
}

export default index;
