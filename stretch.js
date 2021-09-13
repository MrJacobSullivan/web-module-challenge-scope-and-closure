const createBase = (base) => (num) => base + num

var addSix = createBase(6)
addSix(10) // returns 16
addSix(21) // returns 27
console.log(addSix(10))
console.log(addSix(21))
