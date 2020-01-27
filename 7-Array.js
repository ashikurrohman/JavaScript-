                   JavaScript Array
                  -------------------------

===================================================
what we will learn in this section:
1: Declaring an array
2: Array Constructor 
3: forEach Loop 
4: for of Loop 
5: Array Concat 
6: Rest Parameter With Function
7: Immediately invoked Function
7: More practices (assigment)

=====================================================

------------------------------
// 1: Declaring an array
------------------------------

// Practice #1
var arr = [1, 2, 3, 4]; 

console.log(arr[l]); // Array counting index number 0

Result : 2

// Practice #2
var ArrayanotherStyle = Array("Ashik","Shofiq","Shadaf","Pappu")
console.log(arr[0]); // Array counting index number 0

Result : Ashik

// Practice #3


var arrayprac = [];

arrayprac[1] = "Ashik"; 
// Array value initialization from index 1
arrayprac[2] = "Pappu";
arrayprac[3] = "Romez";
arrayprac[4] = "Rakib";
arrayprac[5] = "sadaf";


console.log(arrayprac[2]);

Result : Pappu


----------------------------
// 2: Array Constructor 
----------------------------


var ArrayCons = new Array("name","roll","age","subject");

console.log(ArrayCons[2]);

Result : age


---------------------
// 3: ForEach Loop 
---------------------


var ArrayCons = new Array("Ashik","Rohim","Borkot","korim");

ArrayCons.forEach(function(names){
    console.log(names);
})

Result : 
Ashik
Rohim
Borkot
korim

---------------------
// 4: for of Loop
---------------------


var ArrayCons = new Array("Ashik","Rohim","Borkot","korim");


for(var name of ArrayCons){
    console.log(name);
}

Result : 
Ashik
Rohim
Borkot
korim


---------------------
// 4: Array Concat 
---------------------

// Practice #1

 var ArrayCons = new Array("Ashik","Rohim","Borkot","korim");

 var conCatArray = ArrayCons.concat("Romez","sohel","subin"); 

 console.log(conCatArray);
 
 Result : 
 Ashik
 Rohim
 Borkot
 korim
 Romez
 sohel
 subin
 
 
 // Practice #2
 
 
 
 var ArrayCons = new Array("Ashik","Rohim","Borkot","korim");

var newArray = new Array("pagol","Subin","shawon");

var AnotherArray = ArrayCons.concat(newArray);
console.log(AnotherArray);

 Result : 
 Ashik
 Rohim
 Borkot
 korim
 Romez
 sohel
 subin

