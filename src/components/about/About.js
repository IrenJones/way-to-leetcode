import React from 'react';
import Header from '../utilities/Header';
import Footer from '../utilities/Footer';
import "./About.css"
import AboutInfo from "./AboutInfo";

function About() {
    return (
        <div>
            <Header />
            <hr/>
            <AboutInfo className="container-div"/>
            <hr/>
            <Footer/>
        </div>
    );
}

export default About;