function testing(greet,name){
    function firstName(){
        if(name){
            return name.split(' ')[0]
        }else{
            return ' '
        }

    }
    let fullGreeting = greet + ' ' + firstName();
    console.log( fullGreeting )
}

testing("Hello,Good Morning","Ashikur Rohman")
