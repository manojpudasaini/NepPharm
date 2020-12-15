import React from 'react';
import "./Header.css";
import Logo from '../Assets/neppharm.png';
import {NavLink} from 'react-router-dom';
import {UserOutlined, ShoppingCartOutlined, HistoryOutlined, LoginOutlined} from "@ant-design/icons";
const Header =()=>{
    return(
        <div className="headerContainer">
           <div className="logoWrapper">    
            <NavLink to="/"><img src={Logo} height='100%' width='250px' alt="neppharm"/></NavLink>
           </div>

            <div className="menuWrapper">
                <div className="navItems">
                    <UserOutlined />
                    <NavLink to="/user" activeClassName="navActive" className="navLinks" style={{ textDecoration: 'none'}}>Hello, User</NavLink>
                </div>

                <div className="navItems">
                   <ShoppingCartOutlined />
                    <NavLink to="/cart" activeClassName="navActive" className="navLinks" style={{ textDecoration: 'none'}}>Cart</NavLink>
                </div>

                <div className="navItems">
                    <HistoryOutlined />
                    <NavLink to="/orderhistory" activeClassName="navActive" className="navLinks"  style={{ textDecoration: 'none',padding:'8px' }}>Order History</NavLink>
                </div>

                <div className="navItems">
                    <LoginOutlined />
                    <NavLink to="/sign" activeClassName="navActive" className="navLinks" style={{ textDecoration: 'none', padding:'8px'  }}>Sign In</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;