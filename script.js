// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = prompt("Enter the password length (between 8-128 characters):");

  // check password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Warning: please enter a valid number between 8 and 128 characters. No password has been generated");
    return;
  }

  var includeLowerCased = confirm("Click Ok to include lowercase characters?");
  var includeUpperCased = confirm("Click Ok to include uppercase characters?");
  var includeNumeric = confirm("Click Ok to include numeric characters?");
  var includeSpecial = confirm("Click Ok to include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowerCased && !includeUpperCased && !includeNumeric && !includeSpecial) {
    alert("At least one character type must be selected. No password has been generated");
    return;
  }

  //Set initial empty set of available characters
  var allChars = "";

    //cycle through various prompts and if confirmed, add to the set of available characters
    if (includeLowerCased) {
      allChars += lowerCasedCharacters.join('');
    }
    if (includeUpperCased) {
      allChars += upperCasedCharacters.join('');
    }
    if (includeNumeric) {
      allChars += numericCharacters.join('');
    }
    if (includeSpecial) {
      allChars += specialCharacters.join('');
    }
    // Make passwordLength and allChars available to call from outside the function
    return { passwordLength: passwordLength, allChars: allChars };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
    // Get password options
    var passwordOptions = getPasswordOptions();

    // Check if password options are available - this should not be necessary
    if (!passwordOptions) {
      return ''; // Return an empty string if options are not available
    }
  
    // Extract values from passwordOptions
    var passwordLength = passwordOptions.passwordLength;
    var allChars = passwordOptions.allChars;
  
  // Generate the password of length passwordLength and using characters from allChars
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    password += getRandom(allChars);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);