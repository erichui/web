let arrayFirst = (array, num = 1) => {
  if (!Array.isArray(array)) {
    throw new Error('The first parameter must be the array type')
  }
  if (array.length === 0) {
    return null
  }
  let first = array.slice(0, num)
  return first.length < 2 ? first[0] : first
}
let arrayLast = (array, num = 1) => {
  if (!Array.isArray(array)) {
    throw new Error('The first parameter must be the array type')
  }
  let len = array.length
  if (len === 0) {
    return null
  }
  let last = array.slice(len - num)
  return last.length === 1 ? last[0] : last
}
let arr = [1, 2, 3, 4, 5]
console.log(arrayFirst(arr))
console.log(arrayFirst(arr, 2))
console.log(arrayLast(arr))
console.log(arrayLast(arr, 2))
