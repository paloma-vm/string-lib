function capitalize(str) {
    var firstChar = str[0];
    var upperFirstChar = firstChar.toUpperCase();
    var otherChars = str.slice(1);
    var result = upperFirstChar + otherChars;
    return result;
}
function allCaps(str) {
    var result = str.toUpperCase();
    return result;
}
function capitalizeWords(str) {
    var splitString = str.split(' ');
    var allWordsCap = splitString.map((function (word) { return capitalize(word); }));
    var result = allWordsCap.join(' ');
    return result;
}
function removeExtraSpaces(str) {
    var noSpaces = str.trim(); // removes white space from beginning and end of a string
    var noSpacesArray = noSpaces.split(' ');
    var filteredArray = noSpacesArray.filter(function (word) { return word !== ''; }); // filters empty strings
    var result = filteredArray.join(' ');
    return result;
}
function kebabCase(str) {
    var permittedChars = [];
    var lowerStr = str.toLowerCase();
    var characters = lowerStr.split('');
    for (var i = 0; i < characters.length; i += 1) {
        var charCode = lowerStr.charCodeAt(i);
        if ((charCode === 32) // spaces
            || (charCode === 45) // hyphen
            || (charCode >= 48 && charCode <= 57) // numbers
            || (charCode >= 97 && charCode <= 122) // lowercase letters
        ) {
            permittedChars.push(characters[i]);
        }
    }
    var newStr = permittedChars.join('');
    var newStrNoExtraSpaces = removeExtraSpaces(newStr);
    var result = newStrNoExtraSpaces.split(' ').join('-');
    return result;
}
function snakeOrKebabCase(str, separatingChar) {
    // replace spaces w/underscore or hyphen, all lowercase
    var permittedChars = [];
    var lowerStr = str.toLowerCase();
    var characters = lowerStr.split('');
    for (var i = 0; i < characters.length; i += 1) {
        var charCode = lowerStr.charCodeAt(i);
        if ((charCode === 32) // spaces
            || (charCode === 45) // hyphen
            || (charCode >= 48 && charCode <= 57) // numbers
            || (charCode >= 97 && charCode <= 122) // lowercase letters
        ) {
            permittedChars.push(characters[i]);
        }
    }
    var newStr = permittedChars.join('');
    var newStrNoExtraSpaces = removeExtraSpaces(newStr);
    var result = newStrNoExtraSpaces.split(' ').join(separatingChar);
    return result;
}
function camelCase(str) {
    var words = str.split(' '); // to get an array of words
    var wordsToConvert = words.map(function (word, i) {
        if (i === 0) {
            return word.toLowerCase();
        }
        return capitalize(word);
    });
    var result = wordsToConvert.join(''); // join on an empty string
    return result;
}
function shift(str) {
    var firstChar = str[0];
    var remainingChars = str.slice(1); // removes first character and returns the
    // remainder of the string
    var result = remainingChars + firstChar;
    return result;
}
function makeHashTag(str) {
    // if string has more than 3 words, use the 3 longest words
    var words = str.split(' '); // to get an array of words
    // console.log(words.length)
    words.sort(function (a, b) { return b.length - a.length; }); // help from ChatGPT
    var threeLongestWords = words.slice(0, 3); // takes 3 longest words in the string
    // console.log(threeLongestWords)
    var hashTags = [];
    for (var i = 0; i < threeLongestWords.length; i += 1) {
        threeLongestWords[i] = threeLongestWords[i].toLowerCase();
        // console.log(threeLongestWords[i])
        hashTags[i] = "#".concat(threeLongestWords[i]);
    }
    return hashTags;
}
function isEmpty(str) {
    var trimmedStr = str.trim();
    for (var i = 0; i < trimmedStr.length; i += 1) {
        var char = str[i];
        if ((char !== '') // empty space
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
