import { fetchData } from "../components/fullist/getData";

export const TABLE_SET_SHEET = (sheetName) => ({
    type: 'TABLE.SET_SHEET',
    payload: sheetName
})

export const DATA_UPDATE = (data) => ({
    type: "TABLE.UPDATE_DATA",
    payload: data
})

export function setSelectedSheet(dispatch, sheetName) {
    dispatch(TABLE_SET_SHEET(sheetName));
    dispatch(fetchData);
}