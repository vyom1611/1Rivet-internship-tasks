arr = ['JavaScript','Java','Python','C/C++','Go','SQL','C#']
arr1 = ['React','Angular','node','Express','Vue']

// Find element at index
console.log(arr.at(4))

// Concat with another array
console.log(arr.concat(arr1))

// Filter array with specific condition
console.log(arr.filter(str => str.length > 5))

// Find element with specific condition
console.log(arr.find(element => element.length === 4))

// Find index of element
console.log(arr.findIndex(ele => ele === 'Java'))

// Execute a function for each element
arr.forEach(element => console.log(element))

// Returns boolean wether array includes an element
console.log(arr.includes('C/C++'))

// Prints index of an element
console.log(arr.indexOf('Java'))

// Joins all the elements using another character
console.log(arr.join('|'))

// Prints
console.log(arr.map(ele => ele + 'YAY'))

// Removes and returns last element
console.log(arr.pop())

// Appends an element to last index
console.log(arr.push('PHP'))

// Returns the previous returned value to the next call on the next element
console.log(arr.reduce(ele => ele + ' '))

// Reverses the array
console.log(arr.reverse())

// Removes and returns the element at first idnex
console.log(arr.shift())

// Slices the list into sub-list
console.log(arr.slice(4,7))

// Sorts the array / sorts an array with string based on UTF code
console.log(arr.sort())

// Replaces a new element at given index
console.log(arr.splice(1,0,'Easter Egg'))

// Returns the values of the array
for (item in arr.values()) {
    console.log(item)
}
