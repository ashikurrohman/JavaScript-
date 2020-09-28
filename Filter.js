let arrs = [1,2,3,4,5]

// filter function with anonymous function

 let myArr = arrs.filter(function(value){
 return value % 2 
})
console.log(myArr)


// Filter with Arroy Function 

var result = arrs.filter(n => n > 2 )
console.log(result)
