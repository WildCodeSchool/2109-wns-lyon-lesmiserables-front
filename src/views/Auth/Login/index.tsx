import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";
import { UserOutlined, LockOutlined,MailOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from "react-router";
import { GetUsers, useSignin } from "../../../utils/store/user";
import { GetProjects } from "../../../utils/store/project";

const { Content } = Layout;

const SignIn = (): JSX.Element => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const signIn = useSignin();

  console.log("navigate");

  const onFinish = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const result = await signIn(email, password);
    if (result.data.signIn.accessToken) {
      localStorage.setItem("token", result.data.signIn.accessToken);
      console.log("result", result.data.signIn.accessToken);
      navigate("/dashboard", { replace: true });
    } else {
      setIsLoggedIn(false);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Content>
      
      <div className="form-container sign-in-container">
        <Form
          name="basic"
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="form"
        >
          
          <h1 className="form-title">Welcome Back!</h1>
          <Form.Item
            style={{
              width:"70%"
            }}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
            // label="email"
            name="email"
          >
            <Input  placeholder="Email" prefix={<MailOutlined  className="site-form-item-icon" />} />
          </Form.Item>

          <Form.Item
            rules={[{ required: true}]}
            name="password"
          >
            <Input.Password type="password" prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <button type="submit" className="form-button">Submit</button>
          </Form.Item>
        </Form>
      </div>
    </Content>
  );
};

export default SignIn;
