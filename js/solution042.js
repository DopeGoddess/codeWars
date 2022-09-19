//Goal to practice a smoother code and easily to read
//the original problem
function trueOrFalse(wasThatTrue){
    if (wasThatTrue === true){
        return 'Yes, that was true';
    }
    return 'No, that was false';
}
trueOrFalse();
console.log(trueOrFalse());


//I used arrow function and ternary symbols to evaluate true or False values


const trueOrFalse = wasThatTrue => wasThatTrue === true ? 'Yes, that was true' : 'No, that was false'; 
trueOrFalse();
console.log(trueOrFalse());

