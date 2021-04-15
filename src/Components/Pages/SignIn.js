import { Form, Button, Input, message, notification ,Modal} from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { auth } from "../utils/firebase";
import React, { useState } from "react";
import Logo from '../../Assets/neppharm.png';
import {useHistory} from 'react-router-dom';
import './login.css';


export default function IndexPage() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const history=useHistory();
  const [loading, setLoading] = useState(false);
  const [isVisible,setIsVisible]=useState(false);
  const [email, setEmail]=useState('');
  const handleFormSubmit = async () => {
    setLoading(true)
    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);

      notification.success({
        message: "Login Sucess",
        description: "Welcome to NepPharm"
      });
      history.push("/")
    } catch (e) {

      message.error(e?.message);
    }
    setLoading(false);
  };
  const handlePassword=async()=>{
    try{
      await auth.sendPasswordResetEmail(email)
      notification.success({
        message:  `Email sent For passowrd Reset to ${email}`,
      })
      setIsVisible(false)

    }catch(e){
      message.error(e?.message)
    }
    

  }
  return (
    <div
      
      className="login"
    >
      
      <Form
        onFinish={handleFormSubmit}
        layout="vertical"
        className="formWrapper"
      >
        <img className="logo" src={Logo}/>
        <Form.Item label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>E-mail Address </strong>}
          rules={[{
            required: true,
            message: 'Email Address Is Required',
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
        <Form.Item label={<strong style={{ fontSize: "18px", fontWeight: "500" ,margin:"15px 0px 0px 0px"}}>Password</strong>}
          rules={[{
            required: true,
            message: 'Password Is Required',
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


        <Form.Item >
          
            <Button
              style={{ marginTop: "30px", backgroundColor: 'green',fontSize:'18px' ,height:'40px',width:"100%"}}
              htmlType="submit"
              type="primary"
              loading={loading}
              

            >
              Login
          </Button>
       
        </Form.Item>
        <div style={{textAlign:"center",marginTop:"-15px",fontSize:"16px"}}>
          <a onClick={()=>setIsVisible(true)}>Forgot Password ? Click here</a>
        </div>
        <div style={{textAlign:"center",marginTop:'10px',fontSize:"18px",textDecoration:"underline"}}>
          <a href="/create-account" >Create New account</a>
        </div>
      </Form>
      <Modal  title="Password Reset" visible={isVisible} onCancel={()=>setIsVisible(false)} footer={null}>
        <Form layout="vertical" onFinish={handlePassword}>
          <Form.Item requiredMark label="Email Address">
            <Input size="large" onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder={"Enter Your Email"} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" disabled={email===""?true:false}>Send Password Reset Email</Button>
          </Form.Item>
        </Form>

      </Modal>
    </div>
  );
}