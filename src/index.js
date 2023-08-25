// CHALLENGE 1
function capitalize(str) {
    const firstChar = str[0]
    const upperFirstChar = firstChar.toUpperCase()
    const otherChars = str.slice(1)

    const result = upperFirstChar + otherChars
    // console.log(result)
    return result
}

capitalize('hello')

// CHALLENGE 2
function allCaps(str) {
    const result = str.toUpperCase()
    console.log(result)

    return result
}

allCaps('hello world')

// CHALLENGE 3
function capitalizeWords(str) {
    const splitString = str.split(' ')
    // console.log(splitString)
    const allWordsCap = splitString.map((word => {
        return capitalize(word)
    } ))
    const result = allWordsCap.join(' ')
    console.log(result)
    return result  
}

capitalizeWords("do all the things")


// CHALLENGE 4
function removeExtraSpaces(str) {
    const noSpaces = str.trim() // removes white space from beginning and end of a string
    // console.log(noSpaces)
    const noSpacesArray = noSpaces.split(' ')
    // console.log(noSpacesArray)
    const filteredArray = noSpacesArray.filter(word => word != '') // filters empty strings
    // console.log(filteredArray)
    const result = filteredArray.join(' ')
    console.log(result)
    return result

}

removeExtraSpaces('  Hello   World   ')

// CHALLENGE 5
function kebabCase(str) { // remove extra spaces, replace spaces w/hyphen, all lowercase
    const permittedChars = []
    const lowerStr = str.toLowerCase()
    // console.log(lowerStr)
    const characters = lowerStr.split('')
    for (let i = 0; i < characters.length; i++) {
        const charCode = lowerStr.charCodeAt(i)

        if (
            (charCode === 32) || // spaces
            (charCode === 45) || // hyphen
            (charCode >= 48 && charCode <= 57) || // numbers
            (charCode >= 97 && charCode <= 122) // lowercase letters
        ) {
            permittedChars.push(characters[i])
            // console.log(permittedChars)
        }
    }

    const newStr = permittedChars.join('')
    // console.log(newStr)
    const newStrNoExtraSpaces = removeExtraSpaces(newStr)
    // console.log(newStrNoExtraSpaces)
    const result = newStrNoExtraSpaces.split(' ').join('-')
    console.log(result)
    return result

}

kebabCase(" Hello  World  ")

// CHALLENGE 6
function snakeOrKebabCase(str, separatingChar) { // remove extra spaces, replace spaces w/underscore or hyphen, all lowercase
    const permittedChars = []
    const lowerStr = str.toLowerCase()
    // console.log(lowerStr)
    const characters = lowerStr.split('')
    for (let i = 0; i < characters.length; i++) {
        const charCode = lowerStr.charCodeAt(i)

        if (
            (charCode === 32) || // spaces
            (charCode === 45) || // hyphen
            (charCode >= 48 && charCode <= 57) || // numbers
            (charCode >= 97 && charCode <= 122) // lowercase letters
        ) {
            permittedChars.push(characters[i])
            // console.log(permittedChars)
        }
    }

    const newStr = permittedChars.join('')
    // console.log(newStr)
    const newStrNoExtraSpaces = removeExtraSpaces(newStr)
    // console.log(newStrNoExtraSpaces)
    const result = newStrNoExtraSpaces.split(' ').join(separatingChar)
    console.log(result)
    return result
}

snakeOrKebabCase("  what the   heck  ", "_")

// CHALLENGE 7
function camelCase(str) {
    const words = str.split(' ') // to get an array of words
    // console.log(splitString)
    const wordsToConvert = words.map((word, i) => {
        if (i === 0) {
            return word.toLowerCase()
        } else {
            return capitalize(word)
        }
    })
    const result = wordsToConvert.join('') // join on an empty string
    console.log(result)
    return result  
}

camelCase('Camel Case')

// CHALLENGE 8
function shift(str) { // take first char of str and move to end of str
    const firstChar = str[0]
    const remainingChars = str.slice(1) // removes first character and returns the 
                                    // remainder of the string
    // console.log(firstChar)
    // console.log(remainingChars)
    const result = remainingChars + firstChar
    console.log(result)
    return result
}
shift('Howdy Planet')

// CHALLENGE 9
function makeHashTag(str) { // convert string to hash tag
    // if string has more than 3 words, use the 3 longest words
    const words = str.split(' ') // to get an array of words
    // console.log(words.length)
    words.sort((a, b) => b.length - a.length) // help from ChatGPT
    const threeLongestWords = words.slice(0, 3) // takes 3 longest words in the string
    // console.log(threeLongestWords)
    const hashTags = []
    for (let i = 0; i < threeLongestWords.length; i++) {
        threeLongestWords[i] = threeLongestWords[i].toLowerCase()
        // console.log(threeLongestWords[i])
        hashTags[i] = '#' + threeLongestWords[i]
    }
    
    console.log(hashTags)
    return hashTags
}

makeHashTag('Amazing bongo drums for sale')
makeHashTag('Mediocre bongo drums for discount price')

// CHALLENGE 10
function isEmpty(str) { //returns True if empty or only whitespace (spaces, line returns, tabs)
    const trimmedStr = str.trim()
    for (let i = 0; i < trimmedStr.length; i++) {
        const char = str[i]
        if (
            (char !== '') && // empty space
            (char !== ' ') && // space
            (char !== '\n') && // new line
            (char !== '\r') && // carriage return
            (char !== '\t') // tab
         ) {
            return false
        } 
    }
    return true // must be outside the loop
}

const result = isEmpty('ABC def')
console.log(result)
const result2 = isEmpty('          ')
console.log(result2)



