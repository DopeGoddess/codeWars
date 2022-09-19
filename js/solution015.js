// Basic Data type-object 

/*Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."Give you a function animal, accept 1 parameter:obj like this:

{name:"dog",legs:4,color:"white"}
and return a string like this:

"This white dog has 4 legs."*/


function animal({name, legs, color}) {
    return `This ${color} ${name} has ${legs} legs.`;
  }