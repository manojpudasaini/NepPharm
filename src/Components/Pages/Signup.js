import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Select, Upload, message, notification } from 'antd';
import { UploadOutlined, UserOutlined, LockOutlined, PhoneOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';
import { auth, firebase } from '../utils/firebase';
import { useHistory } from 'react-router-dom';
import Logo from '../../Assets/neppharm.png';
import './login.css';
import axios from 'axios';

function Signup() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
    address: '',
    phone: '',

  })
  const history = useHistory();

  const handleFormSubmit = async () => {
    // try {
      await axios.post("http://localhost:4000/order",user)
    //   await auth.createUserWithEmailAndPassword(user.email, user.password);
    //  const users=auth.currentUser;

    //   await users.sendEmailVerification({url:"http://localhost"});
      
      notification.success({message:"Verification Link Sent to",description:user?.email})
      history.push("/sign")
    // }
    // catch (e) {
      // message.error(e?.message);
      // if(e.message)
      // notification.error({message:e?.message});
      // else notification.error({message:"Error Occured"})
    // }
  }


  const [fileList, setFileList] = useState();
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  const handleChange = async (info) => {
    console.log(info.file)
    if (info.file.status === "done") {
      const file = await getBase64(info.file.originFileObj)
      console.log(file)
      setFileList(file)
    }
  };
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  };
  return (
    <div
      className="login"
    >
      <img style={{cursor:"pointer"}} onClick={()=>{history.push("/")}} className="logo" src={Logo} />
      <Form
        onFinish={handleFormSubmit}
        layout="vertical"
        className="formWrapper"
      >


        <div className="profile">
          {fileList && <img src={fileList} alt="profile image" />}
        </div>
        <Upload className="upload" showUploadList={false} onChange={handleChange} customRequest={dummyRequest}>
          <Button style={{ marginTop: 10, display: "flex", justifyContent: "center" }}>Upload Image</Button>
        </Upload>
        <Form.Item
          name="username"
          label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>Full Name </strong>}
        
          rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
        >
          <Input
            
            placeholder="full name"
            size="large"
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          name="phone"
          label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>Phone Number</strong>}
          rules={[{ required: true, message: 'Please input your phone number!' }]}
          type="tel"
        >
          <Input
          type="number"
           
             placeholder="phone number"
            size="large"
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </Form.Item>
        

        <Form.Item
          name="email"
          label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>E-mail Address </strong>}
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
        >
          <Input
             placeholder="email"
            size="large"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>Password</strong>}
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password
             placeholder="password"
            size="large"
          />
        </Form.Item>
        <Form.Item
          name="confirm"
          label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>Confirm Password </strong>}
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
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
        >
          <Input.Password
             placeholder=" re-enter password"
            size="large"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Item>
       

        <Form.Item>
          <Button type="primary" htmlType="submit"
            style={{ marginTop: "30px", backgroundColor: 'green', fontSize: '18px', height: '40px', width: "100%" }}>
            Sign Up
            </Button>
        </Form.Item>
      </Form>

    </div>
  )
}

export default Signup
