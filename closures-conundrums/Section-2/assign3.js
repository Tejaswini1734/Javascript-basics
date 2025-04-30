console.log(mysteryVariable);
mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
console.log(&quot;Inside revealMystery:&quot;, mysteryVariable);
var mysteryVariable = 20;
console.log(&quot;Inside revealMystery (after declaration):&quot;, mysteryVariable);
}
revealMystery();
console.log(&quot;After revealMystery:&quot;, mysteryVariable);