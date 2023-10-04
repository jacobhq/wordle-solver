import words from "./words";
import * as fs from "fs";

let total = 0;
let letterCount = new Map();
let probability = new Map();
for (let letter of "abcdefghijklmnopqrstuvwxyz") {
  letterCount.set(letter, { val: 0 });
  probability.set(letter, { val: 0.0 });
}

for (let w of words) {
  for (let i = 0; i < w.length; i++) {
    let char = w[i];
    if (letterCount.has(char)) {
      letterCount.get(char).val++;
    }
  }
}

for (let i of letterCount) {
  total = total + i[1].val;
}

for (let prob of probability) {
  probability.set(prob[0], (letterCount.get(prob[0]).val / total) * 100);
}

console.log(JSON.stringify(Object.fromEntries(probability)));
fs.writeFile(
  "data/letterProbability.json",
  JSON.stringify(Object.fromEntries(probability)),
  "utf8",
  () => console.log("done")
);
