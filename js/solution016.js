//Basic of Boolean True || False

/* Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

When you have finished the work, click "Run Tests" to see if your code is working properly.*/


function trueOrFalse(val){
    if (val == false || val == undefined || val == 0 || val == -0){
        return "false";
    }else{
        return "true";
    }
}