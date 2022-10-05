import React from "react";
import logo from './logo1.png';
import flim from './film.png';

const footer = () => {
  return (
    <div className="foot">
    <div className="logo1" >
      <img className="img1" src={logo} alt=''/>
    </div>
    <img src={flim} alt="film" className="film" />
      <p>2022 ImgBook📸. All Rights reserved</p>
    </div>
  );
};

export default footer;
