//prompt ka input hmesha string hota ha usa number bnana prhta ha
let user=prompt("enter your fvrt num");
console.log(+user+7)
//comparisison operator

   === or ==
//=== its also check data type
console.log(8 === "8")

//only check number
console.log(8 == "8")

//    != or !==
//!==its also check data type
console.log(6 !== "5");

//only check number
console.log(6 != "5")

//< or > or >= or <=
//6 bara ha 2 se
console.log(6 > 2)
//6 chota ha 2 se
console.log(6 < 2)
/////////////
console.log(6 >= 3);
///////////
let num1 = 4;
let num2 = 20;
console.log(num2 >= num1);
console.log(num1 >= num2);
////////////////if/else////////////////////////////
let n = +prompt("Enter you age")
if (n >= 18) {
    //alert("You are allow");
}
else {
    alert("you are not");
}
///////////////////////////////////////////////
let game1 = +prompt("Guess a number")
///////////Apply BODMAS
let gu = Math.round(Math.random() * 10);
if (g === gu) {
    alert("Congrats your right")
}
else {
    alert("Sorry try again")
}
////////////////////
let gam2 = prompt("is this even or odd")
let ga = Math.round(Math.random() * 10)
if (ga % 2===0 && gam2==="even") 
{
    console.log("YOU WON",' '+ga);
}
else if (ga % 2!=0 && gam2==="odd") 
{
    console.log("YOU WON",' '+ga);
}
else {
    console.log("YOU LOST"+ ' '+ga);
}
////////////////////for loop/////////////
//initialization,condition,increment
for(i=1;i<=10;i++){
    ///////hmy sbse phly srf jo dekhana ha wo krengy or phir = k bd simplify
    console.log("2 X"+' '+i +"="+2*i );
}

