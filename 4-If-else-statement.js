

Conditional Statement ,  Ternary Operator
----------------------------------------------


===================================================
what we will learn in this section:
1: Conditional Statement
2: Ternary Operator
3: Practice (assigment)

=====================================================



// Assignment 1 

Requirements => (variable x is Positive number or Nagetive ?)

var x = 10;

if(x > 0){
	var result = "Number " + x +" Positive.";
}else{
	var result = "Number " + x +" Negative.";
}
console.log(result);

Result : Number 10 is Positive.

// Assignment 2
 
var x = 69;

Requirements => (variable x is Even number or odd ?)

var reminder = x % 2;

if( 0 == reminder ){
	var result = "This "+ x +" Number is Even";
}else{
	var result = "This "+ x +" Number is odd";
	
}

console.log(result);

Result : This 69 Number is Even

// Assignment 3

var ExamResult = 59;

Requirements => (Let's find out Which Exam Result Grade You Got ?)

var result ;

if(ExamResult >= 0 && ExamResult < 33){
	result = "You are Fail !!"
}
else if(ExamResult > 32 && ExamResult <= 49 ){
	result = "Your Grade is 'D' ";
}
else if(ExamResult >= 50 && ExamResult <= 59){
	result = "Your Grade is 'C' ";
}
else if(ExamResult >= 60 && ExamResult <= 69){
	result = "Your Grade is 'B' ";
}
else if(ExamResult >= 70 && ExamResult <= 79){
	result = "Your Grade is 'A' ";
}
else if(ExamResult >= 80 && ExamResult <= 100){
	result = "Your Grade is 'A+' ";
}else {
	result = "it's not a Correct Number";

}

console.log(result)

Result : Your Grade is 'C' 


 Ternary Operator
------------------------

// Assignment 4

Requirements => ( If Age under then 18, show "You are a Younger boy" using ternary operator  ?)

var Age = 16;
var result; // variable without intialization value 

result = Age > 18 ? "You are elder then 18" : "You are a Younger boy";

console.log(result);

Result : You are a Younger boy



******************** I hope You enjoy it **********************





















