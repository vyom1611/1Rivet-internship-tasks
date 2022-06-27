// 1. Use any combination of map(), filter(), or reduce() (Do not use for, while loops or forEach())
// Create a function to return a new array which contains the squares of only the positive integers when an array of real numbers is passed to it.
// Expected Output:
// square([8, 5.8, -9.8, 3.14, 36, 10, 7.34, -6]) should return [64, 1296, 100].

//Answer:
function square(arr) {
  var arr2 = arr.filter(value => Number.isInteger(value)).filter(element => element > 0)

  return arr2.map( element => { return element*element})
}

console.log(square([8, 5.8, -9.8, 3.14, 36, 10, 7.34, -6]))



// 2. Modify the function increment by adding default parameters so that it will add 1 to number if value is not specified.
// Expected Output:
const increment = (number, value = 1) => number + value;




// 3. Assign the value to today, tomorrow without using dot notation.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const today = HIGH_TEMPERATURES['today'];
const tomorrow = HIGH_TEMPERATURES['tomorrow'];





// 4. Convert this to arrow function
var myConcat = (arr1, arr2) => arr1.concat(arr2);


console.log(myConcat([1, 2], [3, 4, 5]));




// 5. Write a function that takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr.
// Expected Output:
// copyArray([true, false, true], 2) should return [[true, false, true], [true, false, true]]
// copyArray([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]


//Answer:
const copyArray = (arr, num) => {
  let newArr = [];
  for (let i = 0; i < num; i++) {
    newArr.push(arr)
  }

  return newArr
}

console.log(copyArray([true, false, true], 2))





// 6. Write a function that takes an array and an element as arguments. The function is supposed to return true if the passed element exists on the array, and false if it does not.
// Expected Output:
// quickCheck(["car", "bike", "plane"], "bus") should return false
// quickCheck(["car", "bike", "plane"], "bike") should return true
// quickCheck([3, 5, 9, 125, 45, 2], 125) should return true

//Answer:
const quickCheck = (arr, ele) => {
  if (arr.includes(ele)) {
    return true
  } else {
    return false
  }

}

console.log(quickCheck([3, 5, 9, 125, 45, 2], 125))



// 7. Write a function to sort the elements of array in alphabetical order. The function should return the sorted array.
// Expected Output:
// sortAlphabets(["a", "d", "c", "a", "z", "g"]) should return ["a", "a", "c", "d", "g", "z"].

//Answer:

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [ ...arr, ...left, ...right ]
}

const sortAlphabets = (arr) => {
  if (arr.length < 2) {
    return arr
  }
  if (arr.length > 1) {
    var mid = arr.length / 2
    var left = arr.slice(0,mid)
    var right = arr.slice(mid)

    return merge(sortAlphabets(left), sortAlphabets(right))
  }
}

console.log(sortAlphabets(["a", "d", "c", "a", "z", "g"]))



// 8. Write a function to to concatenate attach to the end of original. The function should return the concatenated array.
// Expected Output:
// combineArray([1, 2, 3], [4, 5]) should return [1, 2, 3, 4, 5]

//Answer:
const combineArray = (arr1, arr2) => {
  return [...arr1,...arr2]
}

console.log(combineArray([1, 2, 3], [4, 5]))



// 9. Write a function to check if every element in arr is positive. The function should return a Boolean value.
// Expected Output:
// checkPositive([1, 2, 3, -4, 5]) should return false.

//Answer:
const checkPositive = (arr) => {
    return !(arr.find(element => element < 0))
}

console.log(checkPositive([1, 2, 3, -4, 5]))




// 10. Write a function to check if any element in arr is positive. The function should return a Boolean value.
// Expected Output:
// checkPositive([1, 2, 3, -4, 5]) should return true.

//Answer:
const checkPositive2 = (arr) => {
    let val = (arr.find(element => element > 0))
    if (val > 0) {
      return true
    }
}

console.log(checkPositive2([1, 2, 3, -4, 5]))




// 11. Write a function to sum all numbers in a range.
// Expected Output:
// sumAll([1, 4]) should return 10.

// Answer:
const sumAll = (arr) => {
    return arr.reduce((i,j) => i + j, 0)
}

console.log(sumAll([1,4]))



// 12. Write a function to convert a string to spinal case
// Expected Output:
// spinalCase("How Are You") should return the string how-are-you.
// spinalCase("What_Is_Your_Name") should return the string what-is-your-name.

//Answer:
const spinalCase = (arr) => {
    return arr.replaceAll(" ", "-").replaceAll("_", "-").toLowerCase();
}
console.log(spinalCase("What_Is_Your_Name"))



// 13. Write a function to perform a search and replace on the sentence using the arguments provided and return the new sentence.
// Expected Output:
// replaceWord("This has a spellngi error", "spellngi", "spelling") should return the string "This has a spelling error".
// replaceWord("His name is Tom", "Tom", "john") should return the string "His name is John".

//Answer:
const replaceWord = (str, spellingMistake, correctStr) => {
    arr = str.split(" ")
    if (arr.includes(spellingMistake)) {
      let index = arr.indexOf(spellingMistake);
      arr[index] = correctStr
    }
    return arr.join(" ")
}

console.log(replaceWord("This has a spellngi error", "spellngi", "spelling"))


// 14. Write a function to compare two arrays and return a new array with any items only found in one of the two given arrays, but not both
// Expected Output:
// findDifferentElements([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4].
// findDifferentElements([1, "calf", 3, "cat"], [1, "calf", 3, 4]) should return ["cat", 4].

//Answer:
const findDifferentElements = (arr1, arr2) => {
    var lst1 = arr1.filter(i => !arr2.includes(i))
    var lst2 = arr2.filter(i => !arr1.includes(i))
    return [...lst1,...lst2]
}

console.log(findDifferentElements([1, "calf", 3, "cat"], [1, "calf", 3, 4]))


// 15. Write a function that any number of arrays and returns a new array of unique values in the order of the original provided arrays.
// Expected Output:
// getUniqueElements([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
// getUniqueElements([1, 3, 2], [5, 4], [5, 6]) should return [1, 3, 2, 5, 4, 6].

//Answer:
const getUniqueElements = (...arrs) => {
  let vals = []
  for (var p = 0; p < arrs.length; p++ ) {
    for (var q = 0; q < arrs[p].length; q++) {
      vals.push(arrs[p][q])
    }
  }
  var uniqueItems = vals.reduce((checkEle, val) => (checkEle.includes(val) ? checkEle : [...checkEle, val]),
  [],
);
  return uniqueItems
}


console.log(getUniqueElements([1, 3, 2], [5, 2, 1, 4], [2, 1]))
