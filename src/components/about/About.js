import React from 'react';
import Header from '../utilities/Header';
import Footer from '../utilities/Footer';
import "./About.css"

function About() {
    return (
        <div>
            <Header />
            <hr/>
            <Content className="container-div"/>
            <hr/>
            <Footer/>
        </div>
    );
}

 class Content extends React.Component {
    render() {
       return (
          <div>
              Hello again
          </div>
       );
    }
 }

export default About;