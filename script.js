"use strict";

// let button = document.querySelector("#btn");
// let inputText = document.querySelector("#text");

function translate(word) {
  let wordArray = word.split("");
  if (vowelFirst(wordArray) === true) {
    word += "way";
  } else {
    let first = wordArray.shift();

    wordArray.push(first);

    wordArray = wordArray.join("");

    wordArray += "ay";

    word = wordArray;
  }

  return word.toLowerCase();
}

function vowelFirst(wordArray) {
  return (
    wordArray[0] === "a" ||
    wordArray[0] === "e" ||
    wordArray[0] === "i" ||
    wordArray[0] === "o" ||
    wordArray[0] === "u" ||
    false
  );
}

if (typeof module !== "undefined") {
  // Node
  module.exports = { translate, vowelFirst };
} else {
  // Browser
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let word = formData.get("word");
    let translation = translate(word);
    document.querySelector("#translation").innerText = translation;
  });
}
