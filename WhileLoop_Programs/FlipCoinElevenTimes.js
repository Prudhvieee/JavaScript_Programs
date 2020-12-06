var Head = 0;
var Tail = 0;
while (Head < 11 && Tail < 11) {
    let oneOrZero = (Math.random()>=0.5)? 1 : 0
    if (oneOrZero == 1) {
        Head++;
    }
    else {
        Tail++;
    }
}
console.log("Heads Count "+ Head);
console.log("Tails count "+Tail);