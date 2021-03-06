import React from 'react';
import DashboardDetails from '../constants/WelcomeScreen.js';
export default function Header()
{
    return(
        <div className="FullSizeContainer">
        <div className="Section-02-Header">{DashboardDetails.Heading}</div>
        <div className="Section-03-Header">
        <img src={process.env.PUBLIC_URL +DashboardDetails.LogoName} className="Customize-Logo" alt="Loading..."></img>
        </div>
        </div>
    );
}