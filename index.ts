import words from "./data/words";
import * as data from "./data/letterProbability.json";

const yellow = ["s", "e", "", "", ""];
const green = ["h", "o", "", "", ""];
const allowedLetters: string[] = [...yellow, ...green].filter((i) => i);
const allowedEmptySlots = 5 - allowedLetters.length;
console.log(allowedEmptySlots);

function checker(value: string) {
  // Check the word includes all the allowed letters
  for (let i = 0; i < allowedLetters.length; i++) {
    if (!value.includes(allowedLetters[i])) {
      return false;
    }
  }

  // Check if green letters are in correct places
  for (let i = 0; i < green.length; i++) {
    const position = i;
    if (green[i] !== "") {
      if (value[position] !== green[i]) {
        return false;
      }
    }
  }

  return true;
}

const newWords = words.filter(checker);
console.log(newWords);

// TODO: Order array by letter probability, check against prev solutions (if yes, then cant happen again)
