let bet = 100;
let win = 0;
let loose = 0;
while (bet > 0 && bet < 200) {
    let oneOrZero = (Math.random()>=0.5)? 1 : 0
	if (oneOrZero == 0) {
		loose++;
		bet--;
	} else {
		win++;
		bet++;
	}
}
console.log("Final Money: " + bet);
console.log("Total Wins: " + win);
console.log("Total Loses: " + loose);