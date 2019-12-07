// write a isValidPassword function
// It accept two argument username and password
// Password must be:
//      contain 8 charater
//      It will not be the username
//      Cannot contain username
// If all requirment found return true
// Otherwise return false

// isValidPassword('Ankit', 'aljdljjjs') // return true

// function isValidPassword(password, username) {
//   if (password.length < 8 && password !== username) {
//     return true;
//   }
//   return false;
// }

// function isValidPassword(password, username) {
//   if (password.length < 8) {
//     //check the length of the password
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     // check is there is no any spaces
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     // check the username is not in password
//     return false;
//   }
//   return true;
// }

// function isValidPassword(password, username) {
//   if (
//     password.length < 8 ||
//     password.indexOf(" ") !== -1 ||
//     password.indexOf(username) !== -1
//   ) {
//     return false;
//   }
//   return true;
// }

// with bollean function with ||

// function isValidPassword(password, username) {
//   const shortLength = password.length < 8;
//   const containSpace = password.indexOf(" ") !== -1;
//   const containUsername = password.indexOf(username) !== -1;
//   if (shortLength || containSpace || containUsername) return false;
//   return true;
// }

// with bollean function &&
function isValidPassword(password, username) {
  const shortLength = password.length < 8;
  const containSpace = password.indexOf(" ") !== -1;
  const containUsername = password.indexOf(username) !== -1;
  return !shortLength && !containSpace && !containUsername;
}
console.log(isValidPassword("ankt 123", "ankt123"));
