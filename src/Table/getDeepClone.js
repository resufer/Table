let deepClone = function (arr) {
  let clone = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) clone[i] = deepClone(arr[i])
    else clone[i] = arr[i]
  }
  return clone
}


export default deepClone;