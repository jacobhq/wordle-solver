import words from "./data/words"

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let matchingWords = []

// const unknownPos = []
const knownPos = ["h", "", "", "", "", "e"]

// const check = "acids"

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

function checker(value: string) {
  let accepted = ["", "", "", "", "", ""];
  
  for (let i = 0; i < value.length; i++) {
    if (value.charAt(i) === knownPos[i]) accepted.splice(i, 1, value.charAt(i))
  }

  console.log(arrayEquals(accepted, knownPos), accepted)
  if (arrayEquals(accepted, knownPos)) return true
}

const newWords = words.filter(checker)
console.log(newWords)
// console.log(words.includes(check.toLowerCase()))