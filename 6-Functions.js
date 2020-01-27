

                    JavaScript Functions
                  -------------------------

===================================================
what we will learn in this section:
1: function
2: function with parameter and arguments
3: function with Default Parameters
4: Anonymous function in variable
5: Arrow function 
6: Rest Parameter With Function
7: Immediately invoked Function
7: More practices (assigment)

=====================================================

function myFunction() {
  return (" It's my First Function ");
}

myFunction(); 

Result : It's my First Function

/*

// 'function' is a keyword for make a function
// 'myFunction()' it's a function name 
// 'return' is a keyword for getting the content
// '()' write anything in the first parenthetis
// call function for get response

*/


// Assignment => #1
(make addition and Display Result : 134 solve it using function ?)



function addiTion(){
	let firstNumber = 35;
    let secondNumber = 79;
	let totalNumber = firstNumber + secondNumber;
	
	console.log(totalNumber);
	
}

addiTion();
 Result = 134;

// Assignment => #2
(do multiplication, 410 with 412 using function ?)

function addiTion(){
	let firstNumber = 410;
    let secondNumber = 412;
	let totalNumber = firstNumber * secondNumber;
	
	console.log(totalNumber);
	
}

addiTion();
 Result = 168920;
 
--------------------------- 
 Function with Parameters
---------------------------

function printName(name){
	console.log(name);
	
}
printName("Ashikur Rohman");

Result : Ashikur Rohman

/*

 // 'name' is printName function Parameters
 // inside the function 'Ashikur Rohman' is arguments 

*/
------------------------------------
 Function with Default Parameters
------------------------------------

function defaultParameter(para1,para2,para3=70){
	console.log(" parameter-1=> "+para1+", parameter-2=> "+para2+", parameter-3=> "+para3);
	
}
defaultParameter(22,30);

Result : 
parameter-1=> 22,
parameter-2=> 30,
parameter-3=> 70

/*

// Default Parameter Declare must be last

*/

---------------------------------
 Rest Parameter With Function
----------------------------------

function RestParam(a,...restp){
	console.log(restp[2]);
}
RestParam(10,20,30,40,50);

Result : 40

/*
    // 10 store in parameter 'a' (you can display data of 'a')
	// '...resp' is a REST Parameter
	// Rest Parameter works as a 'Array'
   // The Rest Oparetor must be the last parameter to a function 
*/

--------------------------
Anonymous Function 
--------------------------

function (){
	console.log("My name is Ashikur Rohman");
}; //function will not exicuted

/*

// Create a Anonymous Function which have no specified name. 
// Anonymous function store in a variable
// without store anymous function in a variable you will not get any response.
// watch more under below.
*/
--------------------------------------------
Anonymous Function store in a variable
--------------------------------------------

var showName = function (){
	console.log("My name is Ashikur Rohman");
};

showName(); // function is exicuted

Result : My name is Ashikur Rohman


------------------------
Arrow Function 
------------------------

var name = () => {
	console.log("My name is Ashikur Rohman");
}

name();

Result:  My name is Ashikur Rohman

// Assignment => #1
(Pass Parameter in arrow function)

var name = (a) => {
	console.log(a);
}

name("Show any Data in Browser");

Result : Show any Data in Browser



// Assignment => #2

(Pass Multiple Parameter in arrow function)

var ShowName = (a,b) => {
	return a+b;
};
console.log(10,20);

Result : 30



---------------------------------
Immediately Invoked Function 
---------------------------------
(function inVokedF(){
	console.log("write anything");
})();

Result : write anything


------------------------------
How can we write all Functions 
--------------------------------
// Real Function 

var Funct = function funct(a){
    return a;
}
console.log(Funct(10));

Result : 10


// Anonymous Function
var Funct2 = function(b){
    return b;
}
console.log(Funct2(20));

Result : 20


// Arrow Function 
var Funct3 = c => {return c;}
console.log(Funct3(30));

Result : 30


// Shorter Arrow Function 
var Funct4 = d => d;
console.log(Funct4(40));

Result : 40

--------------------------------


******************** I hope You enjoy it **********************
