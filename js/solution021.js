/* You need it write a loop statement within the function that loops (n)time. Each time through the loop it will add one (*)
to (str), alternating on which side it padded: the first time will add a (*) to the left of (str), 
the second time will ass a * to the right side, and so on. 
Finally, return the padded string.*/

function padIt(str,n){
    //coding here
    res = str;
    do {
      res = "*" + res;
      n--;
      if (n > 0) {
        res += "*";
        n--;
      }
    } while (n > 0); 
    
    return res;
    
  }

