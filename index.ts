import words from "./data/words"

// const unknownPos = []
const knownPos = ["h", "o", "b", "", ""]

function arrayEquals(a: String[], b: String[]) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index] || "");
}

function checker(value: string) {
  let accepted = ["", "", "", "", ""];

  for (let i = 0; i < value.length; i++) {
    if (value.charAt(i) === knownPos[i]) accepted.splice(i, 1, value.charAt(i))
  }

  if (arrayEquals(accepted, knownPos)) return true
}

const newWords = words.filter(checker)
console.log(newWords)
