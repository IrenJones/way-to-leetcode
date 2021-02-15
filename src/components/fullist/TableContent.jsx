import React from 'react';
import Table from './Table';
import { connect } from 'react-redux';
import { fetchData } from './getData';

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

function TableContentComponent(props) {

    console.log(props.data);

    const data = {
        columns: columns,
        rows: props.data
    };

    return (
        <div className="tableData">
            <Table data={data}/>
        </div>
    );
}

const mapStateToProps = (state) => ({
    selectedSheet: state.table.selectedSheet,
    data: state.table.data,
});

const mapDispatchToProps = (dispatch) => dispatch(fetchData);

export const TableContent = connect(mapStateToProps, mapDispatchToProps)(TableContentComponent);