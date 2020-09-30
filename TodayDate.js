
// Find Todays Day = Saturday,Sunday

const date = new Date()

const today = date.getDay()


switch(today) {
    case 0:
        console.log("Sunday")
        break  
    case 1:
        console.log("Monday")
        break  
    case 2:
        console.log("Tuesday")
        break  
    case 3:
        console.log("Wednesday")
        break 
    case 4:
        console.log("Thusday")
        break  
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
    default:
        console.log("Not a valid Number")
    
}



