function capitalize(str) {
  const firstChar = str[0];
  const upperFirstChar = firstChar.toUpperCase();
  const otherChars = str.slice(1);

  const result = upperFirstChar + otherChars;
  return result;
}

function allCaps(str) {
  const result = str.toUpperCase();
  return result;
}

function capitalizeWords(str) {
  const splitString = str.split(' ');
  const allWordsCap = splitString.map(((word) => capitalize(word)));
  const result = allWordsCap.join(' ');
  return result;
}

function removeExtraSpaces(str) {
  const noSpaces = str.trim(); // removes white space from beginning and end of a string
  const noSpacesArray = noSpaces.split(' ');
  const filteredArray = noSpacesArray.filter((word) => word !== ''); // filters empty strings
  const result = filteredArray.join(' ');
  return result;
}

function kebabCase(str) { // remove extra spaces, replace spaces w/hyphen, all lowercase
  const permittedChars = [];
  const lowerStr = str.toLowerCase();
  const characters = lowerStr.split('');
  for (let i = 0; i < characters.length; i += 1) {
    const charCode = lowerStr.charCodeAt(i);

    if (
      (charCode === 32) // spaces
            || (charCode === 45) // hyphen
            || (charCode >= 48 && charCode <= 57) // numbers
            || (charCode >= 97 && charCode <= 122) // lowercase letters
    ) {
      permittedChars.push(characters[i]);
    }
  }

  const newStr = permittedChars.join('');
  const newStrNoExtraSpaces = removeExtraSpaces(newStr);
  const result = newStrNoExtraSpaces.split(' ').join('-');
  return result;
}

function snakeOrKebabCase(str, separatingChar) { // remove extra spaces,
  // replace spaces w/underscore or hyphen, all lowercase
  const permittedChars = [];
  const lowerStr = str.toLowerCase();
  const characters = lowerStr.split('');
  for (let i = 0; i < characters.length; i += 1) {
    const charCode = lowerStr.charCodeAt(i);

    if (
      (charCode === 32) // spaces
            || (charCode === 45) // hyphen
            || (charCode >= 48 && charCode <= 57) // numbers
            || (charCode >= 97 && charCode <= 122) // lowercase letters
    ) {
      permittedChars.push(characters[i]);
    }
  }

  const newStr = permittedChars.join('');
  const newStrNoExtraSpaces = removeExtraSpaces(newStr);
  const result = newStrNoExtraSpaces.split(' ').join(separatingChar);
  return result;
}

function camelCase(str) {
  const words = str.split(' '); // to get an array of words
  const wordsToConvert = words.map((word, i) => {
    if (i === 0) {
      return word.toLowerCase();
    }
    return capitalize(word);
  });
  const result = wordsToConvert.join(''); // join on an empty string
  return result;
}

function shift(str) { // take first char of str and move to end of str
  const firstChar = str[0];
  const remainingChars = str.slice(1); // removes first character and returns the
  // remainder of the string
  const result = remainingChars + firstChar;
  return result;
}

function makeHashTag(str) { // convert string to hash tag
  // if string has more than 3 words, use the 3 longest words
  const words = str.split(' '); // to get an array of words
  // console.log(words.length)
  words.sort((a, b) => b.length - a.length); // help from ChatGPT
  const threeLongestWords = words.slice(0, 3); // takes 3 longest words in the string
  // console.log(threeLongestWords)
  const hashTags = [];
  for (let i = 0; i < threeLongestWords.length; i += 1) {
    threeLongestWords[i] = threeLongestWords[i].toLowerCase();
    // console.log(threeLongestWords[i])
    hashTags[i] = `#${threeLongestWords[i]}`;
  }

  return hashTags;
}

function isEmpty(str) { // returns True if empty or only whitespace (spaces, line returns, tabs)
  const trimmedStr = str.trim();
  for (let i = 0; i < trimmedStr.length; i += 1) {
    const char = str[i];
    if (
      (char !== '') // empty space
            && (char !== ' ') // space
            && (char !== '\n') // new line
            && (char !== '\r') // carriage return
            && (char !== '\t') // tab
    ) {
      return false;
    }
  }
  return true; // must be outside the loop
}

// export modules
module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebabCase = kebabCase;
module.exports.snakeOrKebabCase = snakeOrKebabCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
