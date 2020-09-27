


var myArr = [1,2,3,4,5]

// ForEach Loop in Anonymous Function 

myArr.forEach(function(value){
    console.log("My value is : " + value)
})

// ForEach Loop using Pure Function 
myArr.forEach(myFunction)
 function myFunction(value){
    console.log("My value is : " + value)
}

// ForEach Loop in Arrow Function 
myArr.forEach(value => console.log("My value is : " + value))

=================================================================================

var myArr = [1,2,3,4,5]

myArr.forEach(function(values,indexs,arr){
	
	console.log(value,index,arr)
	
})

Result : 

1 0 [ 1, 2, 3, 4, 5 ]
2 1 [ 1, 2, 3, 4, 5 ]
3 2 [ 1, 2, 3, 4, 5 ]
4 3 [ 1, 2, 3, 4, 5 ]
5 4 [ 1, 2, 3, 4, 5 ]

// 1: We can write anykeyword in anonymous  function aurguments



