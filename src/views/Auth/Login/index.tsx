import { useState } from "react";
import { Form, Input, Button, Checkbox, Layout } from "antd";
import { UserOutlined, LockOutlined,MailOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router";
import { useAuth } from "../../../utils/hooks/auth.hook";

const { Content } = Layout;

const SignIn = (): JSX.Element => {
  const navigate = useNavigate();
  const [failed, setFailed] = useState(false);
  const { login } = useAuth();
  const onFinish = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    await login(email, password);
    navigate("/home", { replace: true });
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
