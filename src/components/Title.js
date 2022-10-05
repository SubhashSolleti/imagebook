import React from "react";
import logo from './logo1.png';


const Title = () => {
  return (
    < div className="title">
    <div className="logo" >
      <img src={logo} alt=''/>
    </div>
    <div>
    </div>
      <h2><p>Welcome to ImgBook</p></h2>
      <br/>
      <p>Upload your Memories Here</p>
    </div>
  )
}

export default Title;
