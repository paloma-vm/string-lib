// CHALLENGE 1
function capitalize(str) {
    firstChar = str[0]
    upperFirstChar = firstChar.toUpperCase()
    otherChars = str.slice(1)

    result = upperFirstChar + otherChars
    // console.log(result)
    return result
}

capitalize('hello')

// CHALLENGE 2
function allCaps(str) {
    result = str.toUpperCase()
    console.log(result)

    return result
}

allCaps('hello world')

// CHALLENGE 3
function capitalizeWords(str) {
    splitString = str.split(' ')
    // console.log(splitString)
    allWordsCap = splitString.map((word => {
        return capitalize(word)
    } ))
    result = allWordsCap.join(' ')
    console.log(result)
    return result
    
}

capitalizeWords("do all the things")


// CHALLENGE 2
// CHALLENGE 2
// CHALLENGE 2
// CHALLENGE 2