import React from 'react';
import firebase from '../../firebase.js';

export async function getData(sheetName) {

  let array = [];
  const snapshot = await firebase.database()
    .ref('/')
    .once('value');
  snapshot.forEach(function (childSnapshot) {
    let items = childSnapshot.val()[sheetName];

    array = Object.values(items).map((task) => ({
      name: task.name,
      times: task.count,
      link: task.link,
      date: task.lastSolved,
    }));
  });
  return array;
};

export async function fetchData(dispatch, getState) {

  const serverData = await getData(getState().table.selectedSheet);
  for (const item of serverData) {
    item.link = <a href={item.link}>{item.link}</a>;
    item.date = item.date.substring(0, 10);
  }

  dispatch({ type: 'TABLE.UPDATE_DATA', payload: serverData })
}