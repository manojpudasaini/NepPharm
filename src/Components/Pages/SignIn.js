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
        
        maxWidth:"400px",
        width:"100%",
        margin:"0 auto",
        marginTop:"120px",
       
      }}
    >
      <Form
        onFinish={handleFormSubmit}
        // style={{ maxWidth: "800px", height: "100vh" }}
        layout="vertical"
      >
        <Form.Item validate={{required:true,
        }} label={<strong style={{fontSize:"18px", fontWeight:"500"}}>Email Address</strong>}>
          <Input
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            value={user.email}
            type="email"
            size="large"
            required={true}
            
            
          />
        </Form.Item>
        <Form.Item label={<strong style={{fontSize:"18px", fontWeight:"500"}}>Password</strong>}>
          <Input.Password
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="email"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{ marginTop: "20px" }}
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