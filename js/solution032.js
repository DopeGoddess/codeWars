/*For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.*/



function well(arrayOfIdeas){
  
    // initialize count of good at 0
    let countOfGood = 0;
    
    // iterate through arrayOfIdeas
    for(const subArray of arrayOfIdeas){
      //iterate through each subarray
      for(let ele of subArray){
        //check if element is a string 
        if(typeof ele === 'string'){
          // normalize the casing 
          ele = ele.toLowerCase();
          // if normalized string equals 'good'
          if(ele === 'good'){
              //increment count by 1
              countOfGood++;
              // if count > 2 break
            }
          }
        }
      }
    
    // if count equals 0 return 'Fail!'
    if(countOfGood === 0) return 'Fail!';
    if(countOfGood < 3 ) return 'Publish!';
    return 'I smell a series!'; 
}