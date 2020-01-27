
**********************  JavaScript Object   **********************



===================================================
what we will learn in this section:
1: Declaretion Of Object
2: Initialization Value as a function called method
3: Create a Object Constructor
4: Factory Function 


=====================================================

//#1 Declaretion of Object
-----------------------------------
var newObject = {}; // create a new object 

newObject['name']= "Ashikur Rohman"; // Initialization object propertie
newObject['roll']= 01;
newObject['subject']= "Economics";
newObject['clgName']= "Tongi Govt. College";

-------------------- or ------------------

newObject.name= "Ashikur Rohman"; // Initialization object propertie
newObject.roll= 01;
newObject.subject= "Economics";
newObject.clgName= "Tongi Govt. College";


document.write(newObject.name);// Display Data 
document.write(newObject.roll);

Result-1 : Ashikur Rohman
Result-2 : 01

 
//#2 Initialization Value as a function called method
-------------------------------------------------------

var secondObj = {
	firstNum : 100,
	secondNum : 200,
	result : function (){
		return firstNum + secondNum;
	}
	
};

document.write(secondObj.result);

//#3 Create a Object using Constructor
-----------------------------------------

var makObj = new Object();   // Object constructor 

makObj.name= "Ashikur Rohman";
makObj.roll = 24;

console.log(makObj.name) ;

Result : Ashikur Rohman


//#4 Factory Function
----------------------------


function FactoryFunc(){
    return {
        model : "Black-x2",
        price : 260000,
        version: 5.0, 

    }
}

var phoneDetails = FactoryFunc();

console.log(phoneDetails.model);

Result : Black-x2

-----------------
   For In Loop
-----------------

function FactoryFunc(model_num){
    return {
        model : model_num ,
        price : 260000,
        version: 5.0, 
        tools:function(){
            return ("this Phone Model is " + this.model+" and Price is "+this.price);
        }

    }
}

var phoneDetails = FactoryFunc("Black-x2s");
for(let details in phoneDetails){
    if(typeof phoneDetails[details] == 'function'){
    console.log(details+" : "+phoneDetails[details]);
}
}





