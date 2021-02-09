import firebase from '../../firebase.js';

export default async function getData(sheetName) {

    let array = [];
    const snapshot = await firebase.database()
    .ref('/')
    .once('value');
    snapshot.forEach(function (childSnapshot) {
        let items = childSnapshot.val()[sheetName];
        for (let item in items) {
          array.push({
            name: items[item].name,
            times: items[item].count,
            link: items[item].link,
            date: items[item].lastSolved,
          });
        }
    });
    return array;
};