
**********************  JavaScript Tag Templates   **********************



========================================
what we will learn in this section:
1: Tag Templates



====================================



let myName = "Ashikur Rohman";
let myAge = 22;
let myFather = "Mominul Haque";
let myMother = "Hosneara Begum";

function fullFamily(strings,...restdip){
    return `${strings[2]} ${restdip[2]}`;
}

console.log(fullFamily`My name is ${myName}  my age is ${myAge} My father Name is ${myFather}  mother name is ${myMother}`);
