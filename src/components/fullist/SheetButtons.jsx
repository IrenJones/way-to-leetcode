import { MDBBtn, MDBBtnGroup, MDBRow, MDBCol } from 'mdbreact';
import { connect } from 'react-redux';

import { setSelectedSheet, TABLE_SET_SHEET } from "../../redux/actions";

function SheetButtonsComponent(props) {

    console.log(props.selectedSheet);
    return (
        <MDBRow className="buttons">
            <MDBCol>
                <MDBBtnGroup vertical>
                    <MDBBtn color="amber" onClick={() => props.setSelectedSheet('Easy')}>Easy</MDBBtn>
                    <MDBBtn color="amber" onClick={() => props.setSelectedSheet('Medium')}>Medium</MDBBtn>
                    <MDBBtn color="amber" onClick={() => props.setSelectedSheet('Hard')}>Hard</MDBBtn>
                    <MDBBtn color="amber" onClick={() => props.setSelectedSheet('Multithread')}>Multithread</MDBBtn>
                </MDBBtnGroup>
            </MDBCol>
        </MDBRow>
    );
}

const mapStateToProps = (state) => ({
    selectedSheet: state.table.selectedSheet,
});

const mapDispatchToProps = (dispatch) => ({
    setSelectedSheet: (sheetName) => setSelectedSheet(dispatch, sheetName),
});

export const SheetButtons = connect(mapStateToProps, mapDispatchToProps)(SheetButtonsComponent);