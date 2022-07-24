/* Create a function that takeds two stringsd as arguments and return either true or false depending 
in whether the total number of characters in the first string 
is equal to the toal number of characters in the second string.*/

function comp(str1, str2){
    return str1.length === str2.length;
}
//strict comparions reference no conversion

//refactor
const comp = (str1, str2) => str1.length === str2.length;

//refactor 
function comp(str1, str2) {
    var compareLengths = (str1.lenth === str2.length)? true : false;
    return compareLengths;
}

//conditions
function comp(str1, str2){
    if (str1.length === str2.length){
        return true;
    } else{
        false;
}
}