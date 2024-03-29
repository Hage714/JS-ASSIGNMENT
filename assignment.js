//FUNCTIONS
//Create a function that takes a string as input and returns 'true' if it's a palindrome,otherwise 'false'  (NOT UNDERSTOOD)
const isPalindrome = (string) => {
    const reverseString = string.split("").reverse().join("")
    if (string === reverseString) {
        return true
    } else {
        return false
    }

}
const result = isPalindrome("raceca")
console.log(result)


//An arrow function that doubles a number
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]

const multiplyByTwo = numbers.map(number => number * 2)
console.log(multiplyByTwo) 


//A function that takes an array of numbers and returns its average value  (NOT UNDERSTOOD)
const calculateAverage =(numbers)=> {
    let sum = numbers.reduce((prevValue, nextValue) => prevValue + nextValue,0)
    return sum/numbers.length
    
}
console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

//A function that capitalizes the first letter
let childNames = "Ann Joy"
console.log(childNames.charAt(0).toUpperCase());


//CONTROL FLOW

//A conditional statement that checks if a number is +,- or zero
const number = -3
if (number > 0) {
    console.log("Positive")
} else if (number < 0) {
    console.log("Negative")
} else {
    console.log("Zero")
}

//switch statement that takes a day of the week as input and logs a message indicating whether its a weekday or weekend
const day = "Sunday"
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday")
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend")
        break;
    default:
        console.log("Not a weekday or weekend")
        break;
}


//LOOPS

//A forloop that prints all the even numbers from 1-20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//While loop that counts from 10-1 and logs each number to the console
let count = 10
while (count >= 1) {
    console.log(count)
    count--
}

//A do while loop to repeatedly prompt the user for a number until they enter a valid positive number (NOT UNDERSTOOD!)
do {
    console.log("Positive number")
    const posNumber = prompt("Enter a positive number")
} while (isNaN(posNumber) || posNumber <= 0)


//ARRAYS

//An array of fruits and use forEach method to log each fruit to the console
const fruits = ["Passion", "Apple", "Orange"]
fruits.forEach(function(fruit){
console.log(fruit)
})

//A function that takes an array of numbers and returns the maximum value
const maxNumber = numbers.reduce((a, b) => Math.max(a, b))
console.log(maxNumber)

//Use the map method to double each element of the array
const doubledNumbers = numbers.map(number => number * 2)
console.log(doubledNumbers)

//A function that takes an array as input and returns a new array with duplicates removed
const nums = [1, 2, 2, 4, 4, 6, 6, 8, 9,10]
const removeDuplicates = nums.filter(number => nums.indexOf(number) === nums.lastIndexOf(number))
console.log(removeDuplicates)

//A function that takes two arrays as input and returns a single array containing elements from both arrays with no duplicates
const nums1 = [1, 2, 2, 4, 4, 6, 6, 8, 10]
const nums2 = [1, 1, 3, 3, 5, 6, 7, 9, 9]
const mergeArrays = [...new Set([...nums1,...nums2])]
console.log(mergeArrays)

//Create an array of numbers and use the filter method to create a new array containing only even numbers
const num3 = [2, 3, 10, 15, 20, 27, 18, 10]
const evenNumbers = num3.filter(number => number % 2 === 0)
console.log(evenNumbers)




