import React from 'react';
import { MDBDataTable } from 'mdbreact';
import Header from '../utilities/Header';
import getData from './getData'
import Footer from '../utilities/Footer';

import "./FullTable.css";

const columns = [
    {
        label: 'Name',
        field: 'name',
        sort: 'asc',
        width: 150
    },
    {
       label: 'Times solved',
       field: 'times',
       sort: 'asc',
       width: 150
    },
    {
       label: 'Link to task',
       field: 'link',
       sort: 'asc',
       width: 150
    },
    {
       label: 'Last time solved',
       field: 'date',
       sort: 'asc',
       width: 150
    },
 ];

function FullTable() {
    return (
        <div>
            <Header />
            <div className="container-div"> <Content /></div>
            <Footer />
        </div>
    );
}

function Content() {

    const [serverData, setServerData] = React.useState([]);

    React.useEffect(() => {
        const runEffect = async () => {
          const data = await getData();
          setServerData(data);
        };
        runEffect();
      }, [setServerData]);

    const data = {
        columns: columns,
        rows: serverData};

    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
    );
}

export default FullTable;
