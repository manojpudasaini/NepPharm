import { Form, Button, Input, message, notification } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { auth } from "../utils/firebase";
import React, { useState } from "react";
import "antd/dist/antd.css";
export default function IndexPage() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const handleFormSubmit = async () => {
    try {
      await auth.createUserWithEmailAndPassword(user.email, user.password);
      message.success("user created");
      const users = auth.currentUser;
      console.log(users);
      await users.sendEmailVerification({ url: "http://localhost:3000" });
      notification.success({
        message: "Verification mail sent to",
        description: user?.email
      });
    } catch (e) {
      console.log("error", e?.message);
      message.error(e?.message);
    }
  };
  return (
    <div
      style={{
        maxWidth:"400px",
        width:"100%",
        margin:"0 auto",
        marginTop:"120px",
       
      }}
    >
      <Form
        onFinish={handleFormSubmit}
        layout="vertical"
      >
        <Form.Item label={<strong style={{fontSize:"18px", fontWeight:"500"}}>E-mail Address </strong>}
                   rules={[{
                      required: true,
                      message: 'Please input your E-mail!',
                }]}
                name="email"
                       
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            type="email"
            size="large"
          />
        </Form.Item>
        <Form.Item label={<strong style={{fontSize:"18px", fontWeight:"500"}}>Password</strong>}
        rules={[{
          required: true,
          message: 'Please input your Password!',
    }]}
        name="password"
        hasFeedback
        >
          <Input.Password
           prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            size="large"
          />
        </Form.Item>

        <Form.Item label={<strong style={{fontSize:"18px", fontWeight:"500"}}>Confirm Password</strong>}
        rules={[{
          required: true,
          message: 'Please confirm your Password!',
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('The two passwords that you entered do not match!'));
      },
    }),
  ]}
        name="confirm"
        dependencies={['password']}
        hasFeedback>
        <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password"
        size="large"
        />
        </Form.Item>

        <Form.Item>
          <Button
            style={{ marginTop: "20px", backgroundColor:'green' }}
            htmlType="submit"
            type="primary"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}