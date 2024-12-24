import React from "react";
import webImage from '../assets/images/web-image.png'
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () =>{
    return (
        <>
            <Common name = 'Grow your business with' imasrc={webImage} visit='/service' btnName= 'Get Started'/>
        </>
    );
}

export default Home;