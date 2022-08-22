/* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/
//FUNDAMNENTALS 


function lovefunc(flower1, flower2){
    if(flower1== odd && flower2 == even || flower1 == even && flower2== odd){
        return true;
    }else(flower1==even && flower2==even || flower1 == odd && flower2 == odd){
        return false; 
    }
    
  }
  
  //if flower1 and flower2 even numbers = false
  // if flower1 and flower 2 is odd numbers = fasle;
  // if flower1 even and flower 2 is odd = true;
  //if flower 1 odd and flower2 even = true; 
  //I need to explain it better and change as switch statements
