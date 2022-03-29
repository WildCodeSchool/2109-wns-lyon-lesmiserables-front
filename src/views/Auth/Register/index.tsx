import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  WalletOutlined,
} from "@ant-design/icons";
import { useSignup } from "../../../utils/store/user";
import { useNavigate } from "react-router";
interface singUpData {
  email: string;
  password: string;
  username: string;
  // id:number
}
const SignUp = () => {
  const signUp = useSignup();
  const navigate = useNavigate();
  const onFinish = async (data: singUpData) => {
    const result = await signUp({
      username: data.username,
      email: data.email,
      password: data.password,
      // id: data.id
    });
    console.log("result", result);
    navigate("/verify");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-container sign-up-container">
      <Form
        name="basic"
        initialValues={{ remember: false }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="form"
      >
        <h1 className="form-title">Hello, Friend!</h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            placeholder="Username"
            prefix={<UserOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item
          name="compagny"
          rules={[{ required: true, message: "Please input your compagny!" }]}
        >
          <Input
            placeholder="Company"
            prefix={<WalletOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
              type: "email",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          hasFeedback
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Confirm Password"
          />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item>
          <button className="form-button" type="submit">
            Submit
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
