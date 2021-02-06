import namor from 'namor'

const newDataRow = () => {
  return {
    name: namor.generate({ words: 1, numbers: 0 }),
    times: Math.floor(Math.random() * 30),
    link: namor.generate({ words: 1, numbers: 0 }),
    date: Math.floor(Math.random() * 100),
  }
}

export default function getData(length) {
  return Array.from({length}, newDataRow);
};