      Apply Method 
=======================

// Find Maximum Value 

let x = [1,3,4,5,6,7, 8];
let value = Math.max.apply(null,x);
console.log(value);

// Find Minimum Value 

let x = [1,3,4,5,6,7, 8];
let value = Math.min.apply(null,x);
console.log(value);

// Add 2 Array using apply method

let x = [1,2,3,4,5]
let y = [6,7,8,9]

x.push.apply(x,y)
console.log(x)

      bind Method 
=======================

var website = {  
  name: "Javatpoint",  
  getName: function() {  
    return this.name;  
  }  
}  
var unboundGetName = website.getName;  
var boundGetName = unboundGetName.bind(website);  
console.log(boundGetName());  



