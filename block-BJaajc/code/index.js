function getfullName(fName,lNmae) {
  return fName+' '+lNmae
}

function isPalindrome(input) {
  return input%2==0
}

function getCircumfrence(redius) {
  return Math.floor(2*3.14*redius)
}

function getArea(redius) {
  return Math.floor(3.14*redius**2)
}

module.exports = {
  getfullName,
  isPalindrome,
  getCircumfrence,
  getArea,
}
