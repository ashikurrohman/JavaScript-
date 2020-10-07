// Check The Correct Browser using if else


let checkBrowser = "chrome"
if(checkBrowser == "mozilla"){
    alert("It's Mozilla Firefox");
}else if(checkBrowser == "chrome"){
    alert("it's google chrome");
}else{"it's wrong input"}




// Check The Correct Browser using Switch

let letsCheck = "mozilla";

switch(letsCheck){
  case "chrome":
    alert("it's google chrome browser");
    break;
 case "safari":
    alert("it's safari browser");
    break;
 case "chrome":
    alert("it's google chrome browser");
    break;
     case "mozilla":
    alert("it's mozilla firefox browser");
    break;
    default:"wrong input!!"
}
