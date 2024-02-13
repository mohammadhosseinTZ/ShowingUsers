import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavbar() {
  return (
    <div>
        <div>
            <nav style={{width:200 }}>
                <ul style={{width:"100%" , listStyle:"none" , margin :0 }}>
                    <li style={{border:"1px solid gray" , marginBottom:8 , padding:15}}><Link to={"/"}>Home</Link></li>
                    <li style={{border:"1px solid gray" , marginBottom:8 , padding:15}}><Link to={"/About"}>About</Link></li>
                    <li style={{border:"1px solid gray" , padding:15}}><Link to={"/Users"}>Users</Link></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
