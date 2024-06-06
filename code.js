const chunk = (arr, num) => {
  let newArr = []
  i = 0
  while (i < arr.length){
    const result = arr.slice(i, i + num)
    newArr.push(result)
    i += num
  }
  return newArr
}
console.log(chunk([1, 2, 3, 4], 3));