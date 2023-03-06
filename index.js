// Question One
 
// differences between mutating array methods and non-mutation array methods in JavaScript
// mutating array method are array methods that mutate(alter) the array they’re called on 
// while non mutating array method are  array methods that does not mutate(alter) the array
//  they’re called on.

// Examples of mutating array methods
// Array.prototype.pop()
// Array.prototype.push()
// Array.prototype.shift()
// Array.prototype.unshift()
// Array.prototype.reverse()

// examples of non mutating array methods
// Array.prototype.slice()
// Array.prototype.concat()
// // Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.join()


/**
 * Question Two
 */
const techonologies = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
// 1 Add ‘Kotlin’ to the end of the array
let koltin = techonologies.push('Kotlin')
console.log('Question i list is ' + techonologies)

// 2 Add ‘Java’ after ‘Ruby’
let javaAfterRuby = techonologies.splice(3, 0, 'Java');
console.log('Question ii list is ' + techonologies)

// 3 Remove the first item in the array
let removeTheFirstItem = techonologies.shift(0);
console.log('Question iii list is ' + techonologies)

// 4 Add ’Scala’ and ‘Swift’ to the beginning of the array
let addScalaSwift = techonologies.unshift('Scala','Swift');
console.log('Question iv list is ' + techonologies)

// 5 Replace ‘PHP’ with ‘Go’ and ‘Rust’
techonologies.splice(5, 1);
techonologies.splice(5, 0, 'Go','Rust');
console.log(techonologies);


/**
 * Question Three
 */
  //  calling this function gives an error': Uncaught TypeError: Cannot
  //  set properties of undefined (setting '2').
  //  The code below did not work because the fruit array is out of  scope.
  // also, array have methods use to add a new element or to remove an element. 

// let fruit = ['apple', 'mango', 'banana'];
// 		function changeFruit( fruit ) {
//     			fruit[2] = "orange";
//     			return fruit;
// 		}
//         changeFruit();


/**
 * Question Four
 * Write a function that accepts an array of numbers as an argument. Return the
 *  maximum value in the array.
 */
function findLargestNum(arr) {
    let largestNum = 0
    for ( i = 0; i < arr.length; i++) {
    if ( arr[i] > largestNum )
        {
        largestNum = arr[i]
        }
      }
    return largestNum
     }
    const result = findLargestNum([1, 3, 4 , 6, 9, 2, 5, 10]);
    console.log(result);
      
    
    // Question five
    
    const arr = [1, 2, 4, 6];
    let valTimesIndex = arr.map(function(val,index,arr){
        return val*index;
    });

    console.log(valTimesIndex); 