import { Form, Button, Input, message, notification } from "antd";
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
        marginTop:50,
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Form
        onFinish={handleFormSubmit}
        style={{ maxWidth: "500px", height: "100vh" }}
        layout="vertical"
      >
        <Form.Item label="Email Address">
          <Input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            type="email"
          />
        </Form.Item>
        <Form.Item label="password">
          <Input.Password
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="email"
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ marginTop: "20px" }}
            htmlType="submit"
            type="primary"
          >
            Create User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}