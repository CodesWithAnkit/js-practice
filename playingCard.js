// write a getCard() function which can return the set of object like {value: 'K', suit: 'club'}
// Pick a random value from (A,2,3,4,5,6,7,8,9,10,J,Q,K)
// Pick a random suit from ('club', 'spades', 'heart', 'diamonds')
// Return both in a object

// function getCard() {
//   const values = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K"
//   ];
//   const ValueIds = Math.floor(Math.random() * values.length);

//   const value = values[ValueIds];

//   const suits = ["clubs", "spades", "heart", "diamonds"];
//   const SuitIds = Math.floor(Math.random() * suits.length);
//   const suit = suits[SuitIds];

//   return { value: value, suit: suit };
// }

// Another way By making some reusuable function

const pick = arr => {
  // Returning random value from array
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

function getCard() {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const value = pick(values);

  const suits = ["clubs", "spades", "heart", "diamonds"];
  const suit = pick(suits);
  return { value: value, suit: suit };
}
console.log(getCard());
