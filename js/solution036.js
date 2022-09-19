//Write a function to split a string and convert it into an array of words.
//Fundamentals, arrays, and String
//use split() method to convert string expression into array of strings
//recall of the regrex of /\W/ which is match everything of number of non-alphanumeric characters in various quotes and strings.

function stringToArray(string){
    return string.split(/\W/);
}
