let str = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&d&enabled'

let parseUrl = (str) => {
  str = decodeURI(str)
  let searchArr = str.split('?')
  if (searchArr.length === 1) {
    return {}
  }
  let search = searchArr[1]
  return search.split('&').map((params) => {
    let keyVal = params.split('=')
    let key = keyVal[0]
    let val = keyVal[1] || true
    if (typeof val === 'string' && Number.isNaN(+val) === false) {
      val = +val
    }
    return {
      key,
      val
    }
  }).reduce((retObj, item, index, arr) => {
    let {
      key,
      val
    } = item
    if (typeof retObj[key] === 'undefined') {
      retObj[key] = val
    } else {
      retObj[key] = Array.isArray(retObj[key]) ? retObj[key] : [retObj[key]]
      retObj[key].push(val)
    }
    return retObj
  }, {})
}
let ret = parseUrl(str)
console.log(ret)
