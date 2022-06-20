str = 'My name is Vyom Sharma'
str2 = 'Nice to meet you'


//Slice
console.log(str.slice(11)) 

//Substring
console.log(str.substr(11,15)) // Prints Vyom

// Character at index
console.log(str.charAt(12))

// Concat two strings
console.log(str.concat(str2))

// Check if string ends with this substring
console.log(str.endsWith('Sharma'))

// Search for something if it is in string
console.log(str.includes('Sharma'))

// Get index of something
console.log(str.indexOf('V'))

// Replace string
console.log(str.replace('Vyom Sharma','Joe Biden'))

// Replace all instances
console.log(str.replaceAll('a','i'))

// Search for a word/string
console.log(str.search('Vyom'))

// Split on all empty spaces
console.log(str.split(str, " "))

// Check if string starts with specific sub string
console.log(str.startsWith(' hello world')) //Returnds false

// Lower case the string
console.log(str.toLowerCase())

// Upper case the string
console.log(str.toUpperCase())


