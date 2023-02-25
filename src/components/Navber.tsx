import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'
import { AiFillCodeSandboxCircle } from "react-icons/ai";
export default function Navber() {
  return (
    <div className="container">
      <nav>
        <div className="logo">Folio<b>.</b></div>
        <ul className="navitems">
            <li><Link to="/home">Home </Link></li>
            <li><Link to="#">about</Link></li>
            <li><Link to="#">sKills</Link></li>
            <li><Link to="#">blog</Link></li>
        </ul>
        <div className="links">
            <a href="#" className=""><AiFillCodeSandboxCircle/></a>
            <a href="#" className=""><AiFillCodeSandboxCircle/></a>
            <a href="#" className=""><AiFillCodeSandboxCircle/></a>

        </div>

      </nav>
    </div>
  )
}
