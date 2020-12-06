const userInput=require('readline-sync');
console.log("1.Feet to inch\n2.Feet to meter\n3.Inch to feet\n4.Meter to feet")
let choice=userInput.questionInt("Enter the choice  : ");
switch(choice){ 
    case 1:
        feet=userInput.questionInt("Enter the Feet  : ");
        inches=feet*12;
        console.log(inches+" inches");
        break;
    case 2:
        feet=userInput.questionInt("Enter the Feet  : ");
        meter=feet/3.281;
        console.log(meter+" Meters");
        break;
    case 3:
        inches=userInput.questionInt("Enter the inches :");
        feet=inches/12;
        console.log(feet+" feet");
        break;
    case 4:
        meter=userInput.questionInt("Enter the meters :");
        feet=meter*3.281;
        console.log(feet+" feet");
        break;
    default:
        break;
}