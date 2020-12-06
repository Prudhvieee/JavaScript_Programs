const userInput=require('readline-sync');
var output = [];
let n=userInput.questionInt("Enter the number  : ");
reverseNum(n);
function reverseNum(n) {
    let r = n.toString().split('').reverse().join('');
    return r;
}
var sNumber = reverseNum(n).toString();
for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}
for (let index = 0; index < output.length; index++) {
    switch (index) {
        case 0:
            console.log("Units value: " + output[index]);
            break;
        case 1:
            console.log("Tens value: " + output[index]);
            break;
        case 2:
            console.log("Hundered's Value: " + output[index]);
            break;
        case 3:
            console.log("Thousands value: " + output[index]);
            break;
        default:
        break;
    }
}