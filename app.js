document.addEventListener("DOMContentLoaded", function() {
    
    /*
    console.log("TERE!");

    let hello = "Hello world";
    console.log(hello);

    /*let rangeStart = 1;
    let rangeEnd = 100;
    let numberToCheck = 61;
    let inRange = false;

    for(let i = rangeStart; i <= rangeEnd; i++ ) {
        if(i === numberToCheck){
            inRange = true;
            break;    
        }
    }

    /*if (inRange) {
        console.log("The number is in range");
    } else {
        console.log("The number is out of range");
    }*/

    /*let result = inRange ? "In Range" : "Out of range";
    console.log(result);*/
    /*
    let number = 100;

    for(let i = 1; i <=100; i++) {
        let string = `${number} X ${i} = ${number * i}`;
        console.log(string);
        
        
        
        
        //console.log(number, " X ", i, "=", number*i);
    }*/

    let stringLength;
    let string = ("Hello world!");
    stringLength = string.length;
    console.log(stringLength);

    /*for(let i= 0; i < 12; i++) {
        console.log(string[i]);
    }*/

    /*for(let i = string.length -1; i >= 0; i--) {
        console.log(string[i]);
    }*/

    for(let i = 0; i < 12; i++) {
        
        if(string[i] === " o ") {
            console.log("*");
        } else {
            console.log(string[i]);
        }
    }
   
    let substitute = string.replace("o", "*")

    console.log(substitute);


});