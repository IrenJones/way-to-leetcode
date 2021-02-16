import React from 'react';
import Header from '../utilities/Header';
import Footer from '../utilities/Footer';
import "./About.css"
import { AboutPageContent } from "./AboutInfo";

function About() {
    return (
        <div>
            <Header/>
            <div className="container-div-about">
                <AboutPageContent/>
            </div>
            <Footer/>
        </div>
    );
}

export default About;