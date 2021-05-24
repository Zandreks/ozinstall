import React from 'react'
import HelloBlok from "../../Components/HomePage/HelloBlok";
import HelloServise from "../../Components/HomePage/HelloServise";
import Credentials from "../../Components/Credentials/Credentials";
import Partner from "../../Components/HomePage/Partners";

let HomePage = ()=>{

    return (
        <div className='content-box'>
            <HelloBlok/>
            <HelloServise/>
            <Credentials/>
            <Partner/>
        </div>
    )
}
export default HomePage
