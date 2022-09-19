//function reference to lookup another way other than switch or if/else if statements

function phoneticLookup(val) {
    var result = "";
      
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    result = lookup[val];
    return result;
  }
  
  console.log(phoneticLookup("foxtrot"));