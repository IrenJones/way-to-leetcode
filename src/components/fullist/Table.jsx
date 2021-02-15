import { MDBDataTable } from 'mdbreact';

function Table(props) {
    return(
        <MDBDataTable
            striped
            bordered
            small
            order={['date', 'desc']}
            data={props.data}
        />
    );
}

export default Table;