// CHALLENGE 1
function capitalize(str) {
    firstChar = str[0]
    upperFirstChar = firstChar.toUpperCase()
    otherChars = str.slice(1)

    result = upperFirstChar + otherChars
    console.log(result)
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