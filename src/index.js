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
// CHALLENGE 2
// CHALLENGE 2