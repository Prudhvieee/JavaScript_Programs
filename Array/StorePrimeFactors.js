let userInput=require('readline-sync');
PrimeFactors=[];
let number=userInput.questionInt("Enter the Number : ");
for (let i = 2; i <= number/2; i++) {
	while (number % i == 0) {
		PrimeFactors.push(i);
        number /= i;
	}
}
if (number != 1) {
	PrimeFactors.push(number);
}
console.log(PrimeFactors);