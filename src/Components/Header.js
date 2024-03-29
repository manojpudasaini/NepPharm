import React, {useState} from 'react';
import "./Header.css";
import Logo from '../Assets/neppharm.png';
import {NavLink,useHistory} from 'react-router-dom';
import { ShoppingCartOutlined, MenuOutlined} from "@ant-design/icons";
import {firebase} from '../Components/utils/firebase'

const Header =()=>{
const [open, setOpen]= useState(false);
const user=firebase.auth().currentUser;
const router=useHistory();


    return(
        <div className="headerContainer">
           <div className="logoWrapper">    
            <NavLink to="/"><img src={Logo} height='100%' width='165px' alt="neppharm"/></NavLink>
           </div>
            <div className="menuWrapper" style={{transform: open ?"translateY(0px)":""}}>

               <div className="navItems" onClick={()=> setOpen(false)}>
                    <NavLink to="/sign"  className="navLinks" style={{ textDecoration: 'none', padding:'8px'  }}>Request Medicines</NavLink>
               </div>
                
               <div className="navItems" onClick={()=> setOpen(false)}>
                    <NavLink to="/sign"  className="navLinks" style={{ textDecoration: 'none', padding:'8px'  }}>Consult Doctor</NavLink>
               </div>
               
               <div className="navItems" onClick={()=> setOpen(false)}>
                    <NavLink to="/Articles"  className="navLinks" style={{ textDecoration: 'none', padding:'8px'  }}>Articles</NavLink>
               </div>
               
               <div className="navItems" onClick={()=> setOpen(false)}>
                    <NavLink to="/orderhistory"  className="navLinks"  style={{ textDecoration: 'none',padding:'8px' }}>Order History</NavLink>
                </div>

               <div className="navItems" onClick={()=> setOpen(false)}> 
                    <small style={{display:'block', color:'#fff6f6', fontSize:'0.7em'}}>Hello,{ user ? user?.email:"Guest"}</small>
                   
                  { user?<strong style={{cursor:"pointer",color:"#fff"}} onClick={async()=>{
                      await firebase.auth().signOut();
                      router.push("/sign")
                      
                      }}>Log out</strong>: <NavLink to="/sign"  className="navLinks" style={{ textDecoration: 'none', padding:'8px', marginTop:"-8px"  }}>
                      Sign In
                    </NavLink>}
                </div>

                <div className="navItems" onClick={()=> setOpen(false)}>
                    
                    <NavLink to="/cart"  className="navLinks" style={{ textDecoration: 'none', fontSize:'1.2em'}}><ShoppingCartOutlined style={{paddingRight:"8px"}}/>0</NavLink>
                </div>
               
            </div>
            <MenuOutlined    onClick={()=> setOpen(!open) }className="burger" style={{color: open? "green":""}}/>
            {console.log(open)}
        </div>
    )
}

export default Header;