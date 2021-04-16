import React, { useEffect, useState } from 'react';
import {Form, Button, Input, Select, Upload, message} from 'antd';
import {UploadOutlined, UserOutlined, LockOutlined, PhoneOutlined, HomeOutlined, SmileOutlined } from '@ant-design/icons';
import { auth, firebase } from '../utils/firebase';
import { useHistory } from 'react-router-dom';
import Logo from '../../Assets/neppharm.png';
import './login.css';

function Signup() {
    const[user, setUser]= useState({
        email: '',
        password: '',
        username: '',
        address: '',
        phone: '',

    })
    const history = useHistory();

    const handleFormSubmit= async () =>{
        try {
            await auth.createUserWithEmailAndPassword(user.email, user.password);
        }
        catch(e){
            message.error(e?.message);
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
         prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email"
        size= "middle" 
        onChange={(e)=> setUser({...user, email: e.target.value})}
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
        prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password"
        size= "middle"
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
         prefix={<LockOutlined className="site-form-item-icon" />} placeholder=" re-enter password"
        size= "middle"
        onChange={(e)=> setUser({...user, password: e.target.value})}
        />
      </Form.Item>
      <Form.Item
        name="username"
        label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>Username </strong>}
        tooltip="What do you want to be called ?"
        rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
      >
        <Input 
         prefix={<SmileOutlined className="site-form-item-icon" />} placeholder="your name"
        size= "middle"
        onChange={(e)=> setUser({...user, username: e.target.value})}
        />
      </Form.Item>
      <Form.Item
        name="phone"
        label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>Phone Number</strong>}
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input
        prefix={<PhoneOutlined className="site-form-item-icon" rotate="90"/>} placeholder="phone number"
        size= "middle"
        onChange={(e)=> setUser({...user, phone: e.target.value})}
        />
      </Form.Item> 
      <Form.Item
      name="address"
      label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>Address </strong>}
      rules={[{ required: true, message: 'Please input your address!' }]}
      >
       <Input
       prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="your address"
       size= "middle"
       onChange={(e)=> setUser({...user, address: e.target.value})}
       />
      </Form.Item> 

      <Form.Item
      label={<strong style={{ fontSize: "18px", fontWeight: "500" }}>Upload your Photo</strong>}
      rules={[{ required: true, message: 'Please upload your photo!' }]}
      >
        <Upload
         accept="image/png, image/jpeg"
        >
        <Button icon={<UploadOutlined/>}>Click to upload</Button>    
        </Upload>  
      </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit"
            style={{ marginTop: "30px", backgroundColor: 'green',fontSize:'18px' ,height:'40px',width:"100%"}}>
                Sign Up
            </Button>
        </Form.Item>
          </Form>
        </div>
    )
}

export default Signup
