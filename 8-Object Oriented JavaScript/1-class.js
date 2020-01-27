**********************  JavaScript Class   **********************



===================================================
what we will learn in this section:
1: Class



=====================================================


// Class Use 

var Allmobile = class {
    constructor(name,father){
        this.name = name;
        this.fname = father;
        this.mother = "Hosnearaq Begum";

    };

    names(){
       return ("My name is "+this.name+" And My father name is "+this.fname)
    }

}

let nokia = new Allmobile("Ashikur Rohmans","Mominul Haque");
console.log(nokia.names());

 Result : My name is Ashikur Rohmans And My father name is Mominul Haque



// Class Keyword Use 


class Father {
     fatherMoney(){
        return "Fathers Money";
    }
}

class son extends Father {
     SonsMoney(){return "Sons Money "
} 
}

var Allmoney = new son();
console.log(Allmoney.SonsMoney());

Result : Sons Sons Money





//  Perametarized Constructor 



var Mobile = class Mobile {
    constructor (money){
        this.money = money;
    }
}

class Son extends Mobile{
    constructor (money){
        super(money);
        this.name = "Ashikur Rohman have";
        this.gotmoney = money;
        this.fullmoney = function(){
            return this.name +" got "+this.money;
        }
    }
}

var gotfullmoney = new Son(40000);
console.log(gotfullmoney.fullmoney());


Result : Ashikur Rohman have got 40000





// Method Over writing 


class Father{
    show (){
    return "my name is Ashikur Rohman";
    }

}

class Son extends Father {
    show(){
        return "My name is Sobur Uddin";

    }
    
}

let sshows = new Son();
console.log(sshows.show());

Result : My name is Sobur Uddin



// Static Method 


class name {
    static display (){
        return "Static method In Javascript";
    }

}

console.log(name.display());

Result : Static method In Javascript




