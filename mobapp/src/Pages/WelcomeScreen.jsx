import React from "react";
import "./WelcomeScreen.css";

import logo from "../Assets/logomoufakermain.svg";
import character from "../Assets/moufakrmainfirstcharchter.svg";
import { Link } from "react-router-dom";
import BottomNav from "../Components/Layout/BottomNav";

const WelcomeScreen = () => {
  return (
    <div className="welcomeScreen">
            <BottomNav />
      
      <div className="welcomeContent">
        <h1 className="welcomeTitle animate fadeUp delay1">
          Welcome to
        </h1>

        <img
          src={logo}
          alt="Moufaker Logo"
          className="welcomeLogo animate fadeUp delay2"
        />

        <div className="welcomeButtons animate fadeUp delay3">
           <Link to="/onboarding" >

          <button className="welcomeBtn">Sign in</button>


</Link> 
          <button className="welcomeBtn secondary">Log in</button>
        </div>
      </div>

      <div className="characterWrapper animate fadeUp delay4">
        <img
          src={character}
          alt="Character"
          className="welcomeCharacter"
        />
      </div>
    </div>
  );
};

export default WelcomeScreen;