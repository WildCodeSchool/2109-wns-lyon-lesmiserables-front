import React from "react";
import Style from "styled-jsx";
import SideNav from "../../components/SideNav";
import Task from "../../components/Task";
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
  Select
} from "antd";
import { GetProfile } from "../../utils/store/user";
import { useAuth } from "../../utils/hooks/auth.hook";
import { useNavigate } from "react-router";
const { Content } = Layout;

const { Option } = Select;


function Home() {
  const navigate = useNavigate();
  const { isConnected, checkLogin, user, logout } = useAuth();
  const { profile, error, loading } = GetProfile();

  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = today.toLocaleDateString("fr-FR", options);

  // should be move to the context

  if (loading) return <div>loading</div>;

  if (error) return <div>error</div>;

  return (
    <>
      <SideNav />
      <Layout>
        <Content className="content">
          <div className="box">
            <span>{date}</span>
            <h1>Bonjour {isConnected && profile.username} </h1>
          </div>
          <div className="resumeBlock">
            <Select defaultValue="semaine" style={{ width: 120 }} bordered={false}>
              <Option value="jour">Jour</Option>
              <Option value="mois">Mois</Option>
              <Option value="année">Année</Option>
              <Option value="semaine">Semaine</Option>
            </Select>
            <div className="elemInBox">0 tache terminée</div>
            <div className="elemInBox">3 projets</div>
          </div>
          <Task />
          <button onClick={() => logout(navigate("/auth", { replace: true }))}>
            Logout
          </button>
        </Content>
        <style jsx>{`
          .content {
            text-align: center;
            margin: auto;
            padding-top: 20px;
          }
          .box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .resumeBlock {
            display: flex;
            justify-content: space-between;
            width: 500px;
            height: 34px;
            background-color: #fff;
            border-radius: 20px;
          }
          h1 {
            font-size: 2em;
            font-weight: 500;
          }
          .ant-select{
            border-bottom: none;
          }
          .elemInBox{
            padding: 0 20px;
            align-items: center;
          }
        `}</style>
      </Layout>
    </>
  );
}

export default Home;
