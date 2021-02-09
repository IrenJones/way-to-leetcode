import React from 'react';
import { MDBBtn, MDBBtnGroup, MDBRow, MDBCol, MDBDataTable } from 'mdbreact';
import Header from '../utilities/Header';
import getData from './getData'
import Footer from '../utilities/Footer';

import "./FullTable.css";

const columns = [
    {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 70
    },
    {
        label: 'Times solved',
        field: 'times',
        sort: 'asc',
        width: 5
    },
    {
        label: 'Link to task',
        field: 'link',
        sort: 'asc',
        width: 70
    },
    {
        label: 'Last time solved',
        field: 'date',
        sort: 'asc',
        width: 10
    },
];

function FullTable() {

    const [selectedSheet, setSelectedSheet] = React.useState('Easy');

    return (
        <div>
            <Header />
            <div className="container-div">
                {/* <BtnGroupPage /> */}
                <div className="container-div-button">
                    <MDBRow className="buttons">
                        <MDBCol>
                            <MDBBtnGroup vertical>
                                <MDBBtn color="amber" onClick={() => setSelectedSheet('Easy')}>Easy</MDBBtn>
                                <MDBBtn color="amber" onClick={() => setSelectedSheet('Medium')}>Medium</MDBBtn>
                                <MDBBtn color="amber" onClick={() => setSelectedSheet('Hard')}>Hard</MDBBtn>
                                <MDBBtn color="amber" onClick={() => setSelectedSheet('Multithread')}>Multithread</MDBBtn>
                            </MDBBtnGroup>
                        </MDBCol>
                    </MDBRow>
                </div>
                <Content sheetName={selectedSheet} />
            </div>
            <Footer />
        </div>
    );
}

function Content({ sheetName }) {

    const [serverData, setServerData] = React.useState([]);

    React.useEffect(() => {
        const runEffect = async () => {
            const data = await getData(sheetName);
            for (const item of data) {
                item.link = <a href={item.link}>{item.link}</a>;
                item.date = item.date.substring(0, 10);
            }
            setServerData(data);
        };
        runEffect();
    }, [sheetName]);

    const data = {
        columns: columns,
        rows: serverData
    };

    return (
        <div className="tableData">
            <MDBDataTable
                striped
                bordered
                small
                data={data}
            />
        </div>
    );
}

export default FullTable;
