import React from 'react';
import Header from '../utilities/Header';
import Footer from '../utilities/Footer';

import {SheetButtons} from "./SheetButtons";
import {TableContent} from "./TableContent";
import "./FullTable.css";

function FullTable() {

    return (
        <div>
            <Header />
            <div className="container-div-table">
                {/* <BtnGroupPage /> */}
                <div className="container-div-button">
                    <SheetButtons />
                </div>
                <TableContent />
            </div>
            <Footer />
        </div>
    );
}

export default FullTable;
