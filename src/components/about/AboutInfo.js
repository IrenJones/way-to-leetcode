
import React from 'react';
import { connect } from 'react-redux';
import ProfileImg from './profile5.PNG';

function GetAboutPageInfoComponent() {

    return (
        <table className="tableAbout">
            <tr></tr>
            <tr>
                <td><img className="profileImg" src={ProfileImg} /></td>
                <td>
                    <h1>Hello! Привет! Hyvää päivää! Välkommen!</h1>
                    <br />
                    <br />
                    <h5>This is my pet-project which I develop by myself for self-education. 
                        It's being constantly updated. So maybe sometimes you can find some bugs (but it's ok, I will fix it ASAP!).
                    </h5>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h5>Here I collect all Leetcode and HackerRank tasks I solved and I know that I need to repeat it. I found Leetcode backlog not really useful for this purpose, so I decided to make something that will help me to track tasks and plan my spaced repetition. </h5>
                    <br />
                    <h5>Maybe one day it would be integrated with the Leetcode account.</h5>
                    <hr />
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <h6>P.S. Thanks <a className="darkLink" href="https://www.deviantart.com/beeberbar/art/platypus-Animation-332871738">beeberbar from deviantart</a> for this wonderful platypus animation on main page!</h6>
                </td>
            </tr>
        </table>
    );
}

export const AboutPageContent = connect(null, null)(GetAboutPageInfoComponent);