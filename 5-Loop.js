

JavaScript Loops
---------------------------

===================================================
what we will learn in this section:

1: For loop 
2: While Loop
3: Do While Loop
4: for in Loop
5: Practice (assigment)

=====================================================



Javascript have 4 Types of Loops 
1: for 
2: while
3: do while 
4: for in


// Learn For Loop 
------------------------
// for loop syntax:

for (initialization; condition; increment/decrement) {
  // code block to be executed
}



for(let i = 1; i <= 10; i++){
	console.log(i+",");
}

Result : 1,2,3,4,5,6,7,8,9,10


// Assignment 1

Requirements = > ( Display 30 - 40 all even numbers usign for loop )

for(let i = 30; i <=40; i++){
    if( i % 2 == 0){
       console.log(i + ",");

    }
}

Result : 30,32,34,36,38,40



// Learn While Loop 
------------------------

// While Loop Syntex:

/*
keyword variableName = value;
while(condition){
	console.log();
	increment/decrement;
}
*/
var anyNumber = 10; // 10 is assigned in 'anyNumber' variable

while (anyNumber < 25){
	
	console.log(anyNumber+",");
	anyNumber++;
}

Result : 10,11,12,13,14,15,16,17,18,19,20,21,22,23,24





// Learn do While Loop 
------------------------

// do while Loop Syntex:

/*

keyword variableName = value;
do{
	console.log();
	increment/decrement;
}while(condition);

*/


var anyNumer = 19;
do{
	console.log(anyNumber+","); 
	anyNumber++;
	
	
}while( 27 > anyNumber);

Result : 19,20,21,22,23,24,25,26,






// Learn for in Loop 
------------------------



we will learn for in loop In the 'object section'.
(Object is a javascript method we will discuss about another chapter) 



******************** I hope You enjoy it **********************




















