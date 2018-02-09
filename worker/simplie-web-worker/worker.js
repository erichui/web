onMessage = (e) => {
  let [num1, num2] = e.data
  postMessage(num1 * num2)
}
