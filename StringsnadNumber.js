let s="welcome"
//let s=new String("welcome") //creates a new String object with the value "welcome"
console.log(s.length) //length of the string
console.log(s) //prints the string
console.log(s.toUpperCase()) //converts the string to uppercase
console.log(s.toLowerCase()) //converts the string to lowercase
console.log(s.charAt(0)) //returns the character at index 0 (first character) of the string

//concat() method is used to concatenate two or more strings. This method does not change the existing strings, but instead returns a new string.
let greeting="Hello"
let name="John"
let message=greeting.concat(" ",name) //concatenates greeting and name with a space in between and returns the new string
console.log(message) //prints the concatenated string

//replace() method is used to replace a specified value with another value in a string. This method does not change the original string, but returns a new string with the replacements.
let newMessage=message.replace("John","Jane") //replaces "John" with "Jane" in the message string and returns the new string
console.log(newMessage) //prints the new string with the replacement
console.log("lll: "+message) //original string remains unchanged 

//substring() method returns a portion of the string between the start and end indexes, or to the end of the string if the end index is omitted.
let subMessage=message.substring(0,3) //returns a new string containing characters from index 0 to index 4 (end not included)
console.log(subMessage) //prints the substring
console.log(message) //original string remains unchanged        