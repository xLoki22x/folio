import React from 'react'
import 'animate.css';
import profile from '../assets/pro_img.png';





export default function Home() {
  return (
    <div className="wrapper">
        <div className="cols cols0 animate__animated  animate__bounceIn">
            <span className="topline">Hello</span>
            <h1>I'm <span className="mutline" >Programmer</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fuga alias a vel, architecto officia eaque voluptatum dolore nobis unde magnam quae, iusto error in aliquid excepturi esse hic suscipit?</p>

        </div>

        <div className=" cols cols1">
            <div className="imgebox">
                <img src={profile} className="img_profile" />
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
        {/* <script>
            var typeing = new Typed(".mutline",{
              String : ["code","Programmer"],
              loop:true,
              typespeed:100,backspeed:80,backdelay:1500
            }) 
        </script> */}
      
    </div>
  )
}
