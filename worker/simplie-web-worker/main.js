let num1 = document.querySelector('#number1')
let num2 = document.querySelector('#number2')
let result = document.querySelector('#result')

if(window.Worker) {
  const workerInter = new Worker('worker.js')
  num1.onChange = () => {
    workerInter.postMessage([num1.value, num2.value])
  }
  num2.onChaneg = () => {
    workerInter.postMessage([num1.value, num2.value])
  }
  workerInter.onMessage = (e) => {
    let ret = e.data
    result.innerHTMl = ret
  }
}
