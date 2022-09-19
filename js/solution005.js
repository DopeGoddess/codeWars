//Create a function that takes an interger as an argument and returns "Even" for even number or "Odd" fo odd numbers

function even_or_odd(number) {
    if(number % 2 == 0) {
        return "Even";
    }else {
        return "Odd";
    }
}

console.log(even_or_odd(2));// Even
console.log(even_or_odd(3));// Odd
console.log(even_or_odd(1));//Odd
console.log(even_or_odd(20));//Even 
//fundamentals and if statements
