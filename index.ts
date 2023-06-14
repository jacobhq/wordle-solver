import words from "./data/words"

const yellow = ["s", "", "", "", ""]
const green = ["h", "o", "b", "", ""]
const allowedLetters = []
allowedLetters.concat(yellow)
allowedLetters.concat(green)

function arrayEquals(a: String[], b: String[]) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index] || "");
}

function checker(value: string) {
  let accepted = ["", "", "", "", ""];

  for (let i = 0; i < value.length; i++) {
    if (value.charAt(i) === green[i] && allowedLetters.includes(value.charAt(i))) accepted.splice(i, 1, value.charAt(i))
  }

  if (arrayEquals(accepted, green)) return true
}

const newWords = words.filter(checker)
console.log(newWords)
