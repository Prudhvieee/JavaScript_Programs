let power = 0;
let i = 1;
while (power < 256) {
	power = 2 ** i;
	console.log("2 ^" + i + "= " + power);
	i++;
}