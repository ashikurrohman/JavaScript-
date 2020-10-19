// Prototype 


let yourFunction = function(name,publishDate){
this.myname = name,
this.publish = publishDate

}
let companyName = new yourFunction("Samsung","11-August-2020");

companyName.myname // Accesing the myname - 


// Add Prototype value for accesing from any function 

yourFunction.prototype.color = "Red"


