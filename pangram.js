// A pangram is the sentence which contain every letter of the alphabate, like. "the quick brown fox jump over the lazy dog"

// write the function called isPangram, which check the sentence is containing the each letter of the alphabate or not. Make sure you ingnore the string casing

// Using indexOf() function
// const isPangram = sentence => {
//   for (let char of "abcdefghijklmnopqrstuvwxyz") {
//     let lowerCase = sentence.toLowerCase(); // changing the sentence to lower case
//     if (lowerCase.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// };

// using includes() function
const isPangram = sentence => {
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    let lowerCase = sentence.toLowerCase(); // changing the sentence to lower case
    if (!lowerCase.includes(char)) {
      return false;
    }
  }
  return true;
};
console.log(isPangram("The five boxing wizards jump quickly"));
