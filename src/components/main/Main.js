import React from 'react';
import Header from '../utilities/Header';
import { Loading } from 'react-loading-dot';
import PlatypusGif from './resources/platypus.gif';
import './resources/Content.css';

function MainPage() {
    return (
        <div>
            <Header />
            <Content/>
        </div>
    );
}

 class Content extends React.Component {
    render() {
       return (
          <div className="container-div">
         <img src={PlatypusGif} alt="loading..." />
         <Loading className = "loading"/>
          </div>
       );
    }
 }

export default MainPage;