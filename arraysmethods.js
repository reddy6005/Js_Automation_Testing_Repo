let cars=["volovo","bmw","audi","mercedes"]
console.log(cars.length) //length of the array
console.log(cars)

console.log(cars.toString()) //converts array to string

//pop() method removes the last element from an array and returns that element. This method changes the length of the array.'
console.log(cars.pop()) //removes the last element of the array and returns it
console.log(cars)

//push() method adds one or more elements to the end of an array and returns the new length of the array.
console.log(cars.push("honda")) //adds "honda" to the end of the array and returns the new length of the array
console.log(cars)

//shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
console.log("remove element:" +cars.shift()) //removes the first element of the array and returns it
console.log(cars)

//unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
console.log(cars.unshift("toyota")) //adds "toyota" to the beginning of the array and returns the new length of the array
console.log(cars)

// //delete operator removes an element from an array but does not change the length of the array. It leaves an empty slot in the array.
// delete cars[1] //removes the element at index 1 but does not change the length of the array
// console.log(cars)
// console.log(cars.length) //length of the array remains the same 

// //concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// let moreCars=["honda","toyota"]
// let allCars=cars.concat(moreCars) //merges cars and moreCars into a new array allCars
// console.log(allCars)    

//slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
let slicedCars=cars.slice(1) //returns a new array containing elements from index 1 to index 3 (end not included)
console.log(slicedCars) //prints the sliced array
console.log(cars) //original array remains unchanged 


//sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
cars.sort() //sorts the elements of the array in place
console.log(cars) //prints the sorted array 

let nums=[5,2,9,1,5,6]
nums.sort() //sorts the elements of the array in place      
console.log(nums) //prints the sorted array (note: it sorts numbers as strings, so the order may not be as expected)

console.log(nums.reverse()) //reverses the order of the elements in the array and returns the reversed array
