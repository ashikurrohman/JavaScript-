Default Parameter in ES6
==========================


 function boltu(name,age){
    name ? name = name:name = "Ashikur Rohman";
    age ? age = age : age = 22;
    console.log(`My name is ${name} and i am ${age} years old`)

 }

 boltu('Page',33);
 
Default Parameter in ES6
 ==========================

  const defaulParameter = (name="Ashikur Rohman",age = 33)=>{
     console.log(`My name is ${name} and I am ${age} years old.`)
 }

 defaulParameter()
