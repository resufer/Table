import deepClone from "./getDeepClone";

let data = JSON.parse(localStorage.getItem('DATA')) || [[]];

export let addNewElement = (el) => {
  let lastArr = data[data.length - 1];
  if (lastArr.length > 9) {
    data[data.length] = [el];
  } else {
    lastArr.push(el)
    data[data.length - 1] = lastArr;
  }
  localStorage.setItem('DATA', JSON.stringify(data))
};

export let getTableData = () => {
  let elements = data.map(a => a.length).reduce((a, b) => a + b, 0);
  let dataOut = deepClone(data).map(a => a.reverse());
  dataOut = dataOut.reverse();
  return [dataOut, elements];
};


export let deleteTableData = () => {
  localStorage.removeItem('DATA');
  data = [[]];
};


export let reverseTable = () => {
  data = data.map(a => a.reverse()).reverse()
};