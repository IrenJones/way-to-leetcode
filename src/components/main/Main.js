import React from 'react';
import Header from '../utilities/Header';
import Footer from '../utilities/Footer';
import PlatypusGif from './resources/platypus.gif';
import './resources/Content.css';

function MainPage() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

function Content() {
    return (
        <div className="container-div">
            <h1 className="textContent">Välkommen! Go to <a href="/all" className="darkLink">All tasks</a> page to see solved tasks!</h1>
            <div className="platypusPic"><img src={PlatypusGif} /></div>
        </div>
    );
}

export default MainPage;