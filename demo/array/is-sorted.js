let defaultComparator = (a, b) => {
  return a - b
}

let checksort = (array, comparator = defaultComparator) => {
  if (!Array.isArray(array)) {
    throw new Erro('The first parameter must be the array type')
  }
  let len = array.length
  let i = 1
  for (; i < len; i++) {
    if (comparator(array[i - 1], array[i]) > 0) {
      return false
    }
  }
  return true
}
console.log(checksort([1, 2, 3]))
console.log(checksort([5, 3, 1, 2, 3]))
let arr = [{
  name: 'eric',
  age: 3
}, {
  name: 'ada',
  age: 2
}]
console.log(checksort(arr, (a, b) => {
  return a.age - b.age
}))
