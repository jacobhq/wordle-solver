import words from "./data/words";
import * as data from "./data/letterProbability.json";

const letterProbability = new Map(Object.entries(data));

const yellow = ["d", "", "", "", ""];
const green = ["a", "u", "", "", ""];
const allowedLetters: string[] = [...yellow, ...green].filter((i) => i);

function calculateWordProbability(
  word: string,
  letterProbabilities: Map<string, number>
) {
  let probability = 1;

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    probability *= letterProbabilities.get(letter);
  }

  return probability;
}

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

// Order array by letter probability
const sortedWords = newWords.sort((word1, word2) => {
  const probability1 = calculateWordProbability(word1, letterProbability);
  const probability2 = calculateWordProbability(word2, letterProbability);

  return probability2 - probability1; // Sort in descending order
});

console.log(sortedWords);

// TODO: Check against prev solutions (if yes, then cant happen again)
