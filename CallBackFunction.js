


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
