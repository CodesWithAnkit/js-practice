// Write a program to find the avarage value of the given array
// avg[0,50] //25
// there is not limit of number in the array

function average(arr) {
  let total = 0;
  // loop over each element
  for (let num of arr) {
    //   Add them together
    total += num;
  }
  // divide the sum with the toal number
  return Math.floor(total / arr.length);
}

console.log(average([0, 50]));
console.log(average([12, 12, 33, 123, 123123, 43, 3242, 772, 908739]));
