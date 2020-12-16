import React from 'react';
import "./Header.css";
import Logo from '../Assets/neppharm.png';
import {NavLink} from 'react-router-dom';
import { ShoppingCartOutlined} from "@ant-design/icons";
const Header =()=>{
    return(
        <div className="headerContainer">
           <div className="logoWrapper">    
            <NavLink to="/"><img src={Logo} height='100%' width='165px' alt="neppharm"/></NavLink>
           </div>
            <div className="menuWrapper">

               <div className="navItems">
                    <NavLink to="/sign" activeClassName="navActive" className="navLinks" style={{ textDecoration: 'none', padding:'8px'  }}>Request Medicines</NavLink>
               </div>
                
               <div className="navItems">
                    <NavLink to="/sign" activeClassName="navActive" className="navLinks" style={{ textDecoration: 'none', padding:'8px'  }}>Consult Doctor</NavLink>
               </div>
               
               <div className="navItems">
                    <NavLink to="/Articles" activeClassName="navActive" className="navLinks" style={{ textDecoration: 'none', padding:'8px'  }}>Articles</NavLink>
               </div>
               
               <div className="navItems"> 
                    <strong style={{display:'block', color:'#fff6f6', fontSize:'1em'}}>Hello, Guest</strong>
                    <NavLink to="/sign" activeClassName="navActive" className="navLinks" style={{ textDecoration: 'none', padding:'8px'  }}>
                        Sign In
                        </NavLink>
                </div>
               
                <div className="navItems">
                    <NavLink to="/orderhistory" activeClassName="navActive" className="navLinks"  style={{ textDecoration: 'none',padding:'8px' }}>Order History</NavLink>
                </div>

                <div className="navItems">
                    
                    <NavLink to="/cart" activeClassName="navActive" className="navLinks" style={{ textDecoration: 'none', fontSize:'1.2em'}}><ShoppingCartOutlined />-#</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header;