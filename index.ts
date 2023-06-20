import words from "./data/words";
import * as data from "./data/letterProbability.json";

const yellow = ["s", "e", "", "", ""];
const green = ["h", "o", "", "", ""];
const allowedLetters: String[] = [...yellow, ...green];
console.log(allowedLetters);

function arrayEquals(a: String[], b: String[]) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index] || "")
  );
}

function checker(value: string) {
  let accepted = ["", "", "", "", ""];

  for (let i = 0; i < value.length; i++) {
    if (
      value.charAt(i) === green[i] &&
      allowedLetters.includes(value.charAt(i))
    )
      accepted.splice(i, 1, value.charAt(i));
  }

  if (arrayEquals(accepted, green)) return true;
}

const newWords = words.filter(checker);
console.log(newWords);
console.log(data.a);
