import React, { useState, useEffect } from "react";
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
import Users from "./Users";
import Statistics from "./Statistics";
import { UserOutlined } from "@ant-design/icons";
import { Select } from "antd";
import "./dashboardStyle.less";
import SideNav from "../../components/SideNav";
import { GetProfile, GetUsers } from "../../utils/store/user";
import { useNavigate } from "react-router";

const { Option } = Select;
const { Header, Content } = Layout;
const { TextArea } = Input;
const { TabPane } = Tabs;
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: any) => <div>test{text}</div>,
  },
  //   {
  //     title: "Action",
  //     key: "action",
  //     render: (text: any, record: any) => (
  //       <Space size="middle">
  //         <a>Invite {record.name}</a>
  //         <a>Delete</a>
  //       </Space>
  //     ),
  //   },
];

const data = [
  {
    key: "1",
    name: "Hugo Brown",
    avatar: 32,
  },
  {
    key: "2",
    name: "Loic Green",
    avatar: 42,
  },
  {
    key: "3",
    name: "Youcef Black",
    avatar: 32,
  },
];

function Dashboard() {
  const [isLogged, setIsLogged] = useState(true);
  const [isModalVisibleUser, setIsModalVisibleUser] = useState(false);
  const [isModalVisibleStat, setIsModalVisibleStat] = useState(false);
  const navigate = useNavigate();
  const { profile, loading, error } = GetProfile();
  console.log("getUsers", profile);

  const showModal = (modalToShow: string) => {
    if (modalToShow === "user") {
      setIsModalVisibleUser(true);
    } else {
      setIsModalVisibleStat(true);
    }
  };

  const handleOk = () => {
    setIsModalVisibleUser(false);
    setIsModalVisibleStat(false);
  };

  const handleCancel = () => {
    setIsModalVisibleUser(false);
    setIsModalVisibleStat(false);
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <>
      <SideNav />
      <Layout style={{ height: "100vh" }} className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <p>Welcome {profile && profile.username}</p>
          <h1
            style={{
              textAlign: "end",
              fontSize: "40px",
            }}
          >
            DASHBOARD
          </h1>
          <Tabs type="line">
            <TabPane tab="Users" key="1">
              <Form layout="vertical">
                <Row wrap={false}>
                  <Col flex="none">
                    <Form.Item label="FILTER" style={{ paddingRight: "15px" }}>
                      <Select
                        defaultValue="All"
                        style={{
                          width: 120,
                          background: "lightgrey",
                          borderRadius: "4px",
                        }}
                        bordered={false}
                      >
                        <Option value="date">Date</Option>
                        <Option value="name">Name</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col flex="auto">
                    {" "}
                    <Form.Item label="STATUS">
                      <Select
                        defaultValue="Only active"
                        style={{
                          width: 120,
                          background: "lightgrey",
                          borderRadius: "4px",
                        }}
                        bordered={false}
                      >
                        <Option value="Finish">Finish</Option>
                        <Option value="Only active">Only active</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col style={{ display: "flex", alignItems: "center" }}>
                    <Button type="primary" onClick={() => showModal("user")}>
                      ADD USER
                    </Button>
                    <Modal
                      title="Add user"
                      visible={isModalVisibleUser}
                      onCancel={handleCancel}
                      onOk={handleOk}
                      footer={[
                        <Button key="submit" type="primary" onClick={handleOk}>
                          SEND INVITATION
                        </Button>,
                        <Button
                          key="back"
                          style={{
                            background: "red",
                            border: "red",
                            color: "white",
                          }}
                          onClick={handleCancel}
                        >
                          CANCEL
                        </Button>,
                      ]}
                    >
                      <Form layout="vertical">
                        <Form.Item label="User name">
                          <Input />
                        </Form.Item>
                        <Form.Item label="Email">
                          <Input />
                        </Form.Item>
                        <Form.Item name="radio-group" label="Role :">
                          <Radio.Group>
                            <Space direction="vertical">
                              <Radio value="a">Project manager</Radio>
                              <Radio value="b">Developer</Radio>
                              <Radio value="c">Admin</Radio>
                            </Space>
                          </Radio.Group>
                        </Form.Item>
                      </Form>
                    </Modal>
                  </Col>
                </Row>
              </Form>
              <Users />
            </TabPane>
            <TabPane tab="Statistics" key="2">
              <Form layout="vertical">
                <Row wrap={false}>
                  <Col flex="none">
                    <Form.Item label="FILTER" style={{ paddingRight: "15px" }}>
                      <Select
                        defaultValue="All"
                        style={{
                          width: 120,
                          background: "lightgrey",
                          borderRadius: "4px",
                        }}
                        bordered={false}
                      >
                        <Option value="date">Date</Option>
                        <Option value="name">Name</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col flex="auto">
                    {" "}
                    <Form.Item label="STATUS">
                      <Select
                        defaultValue="Only active"
                        style={{
                          width: 120,
                          background: "lightgrey",
                          borderRadius: "4px",
                        }}
                        bordered={false}
                      >
                        <Option value="Finish">Finish</Option>
                        <Option value="Only active">Only active</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col style={{ display: "flex", alignItems: "center" }}>
                    <Button type="primary" onClick={() => showModal("stat")}>
                      ADD PROJECT
                    </Button>
                    <Modal
                      title="Add project"
                      visible={isModalVisibleStat}
                      onCancel={handleCancel}
                      onOk={handleOk}
                      footer={[
                        <Button key="submit" type="primary" onClick={handleOk}>
                          SEND INVITATION
                        </Button>,
                        <Button
                          key="back"
                          style={{
                            background: "red",
                            border: "red",
                            color: "white",
                          }}
                          onClick={handleCancel}
                        >
                          CANCEL
                        </Button>,
                      ]}
                      style={{
                        width: "300px",
                      }}
                    >
                      <Form layout="vertical">
                        <Form.Item>
                          <Input
                            style={{ borderBottom: "1px solid grey" }}
                            placeholder="PROJECT NAME"
                            bordered={false}
                          />
                        </Form.Item>
                        <Form.Item>
                          <TextArea rows={4} placeholder="DESCRIPTION" />
                        </Form.Item>
                        <Form.Item name="radio-group" label="Role :">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <Table
                              columns={columns}
                              dataSource={data}
                              pagination={false}
                            />
                            <Table
                              columns={columns}
                              dataSource={data}
                              pagination={false}
                            />
                          </div>
                        </Form.Item>
                        <Form.Item name="radio-group" label="Role :">
                          <Radio.Group>
                            <Space direction="vertical">
                              <Radio value="a">Project manager</Radio>
                              <Radio value="b">Developer</Radio>
                              <Radio value="c">Admin</Radio>
                            </Space>
                          </Radio.Group>
                        </Form.Item>
                      </Form>
                    </Modal>
                  </Col>
                </Row>
              </Form>
              <Users />
              <Statistics />
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    </>
  );
}

export default Dashboard;
