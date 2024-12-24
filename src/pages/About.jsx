import React from "react";
import webImage from '../assets/images/about.jpg'
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name='Welcome to About page' imasrc={webImage} visit='/contact' btnName='Contact Now' />
        </>
    );
}

export default About;