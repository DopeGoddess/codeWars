/* Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!*/

function areYouPlayingBanjo(name) {
    // Implement me
    if (name[0] == 'R' || name[0] == 'r')
      return name + " plays banjo";
    else
      return name + " does not play banjo";
  }
//my issue was the index still learning; access the string of specfic letter
//need practice to apply tertary and ticks
//Refactor TIME
function  areYouPlayingBanjo(name){
    if (name[0] == 'R' || name[0] == 'r')
      return name + " plays banjo";
    return name + " does not play banjo";
}
//works the samw way without the else in the problem 
    
