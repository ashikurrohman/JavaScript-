


function checkFunctionAvailibility(question,yes,no){
    if(confirm(question))yes()
    else no();
}

function yes(){
alert("It's Yes")
}

function no(){
alert("It's No")
}

checkFunctionAvailibility("Do you agree?" , yes , no);



// Print Uppercase and Lowercase using CallBack Function


function Tomake(data,callback1,callback2){
    console.log("This is the main Data : " + data)
    callback1(data)
    callback2(data)
}
Tomake("Ashikur Rohman",function(data){
    var upperCase = data.toUpperCase();
    console.log(upperCase)
},function(data){
    var lowercase = data.toLowerCase();
    console.log(lowercase)
})

