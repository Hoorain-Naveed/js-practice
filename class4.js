////function
function greet(students){ //argument
    console.log("hello "+students)
}
greet("nadir"); //parameter
greet("ali");
greet("shahzar");
///////////return gives material if we call on the 
//other side console.log can't return if we call
//// or return k bd usky material ko declare islia krty ku k wo called krny ma km ata
//hum hmesha declare kr k called krty hain jb return use hoga jb var bhi decalre hoga
//jb bhi output ki need hogi tu return use hoga
function employe(file){
    return "working on "+(file)
}
let Data=employe(2);
console.log(Data)
/////////////////////
 function add(num1,num2){
     //////hmesha operators yha likhi jati function k pass nh
     return num1+num2;
 }
 let data1=add(1,2)
 console.log(data1)
 /////////////////

//RECURSION  similar as a loop
 function system(name,time){
     document.write(name,time)
//     ////agr condition true horhi ha tu wo apna apko hi call krlega
     if(time>0){
         system(name,time-1)
     }
 }
 system("hoorain",5)
// ///////////////////////////
 function factorial(num){
    if(num>1){
         return num*(factorial(num-1))
     }
     return(1)
 }
 console.log(factorial(7))
 ///////////
 function table(num){
    if(num>1){
     return num*table(num-1)
    }
    return(1)
 }
 let ta=table(9);
 console.log(ta)
 //////////
 function factorial(user){
     if(user>1){
         return user*factorial(user-1)
     }
     return(1)
 }
 let th=factorial(9);
 console.log(th)
/////////////////////

//Closures=scopes
//parent scope use any where inner or outer=whole function
//child scope= user in inner function=inside function

 let abc="def";//global scope

 function look(){
    let def=5; //child scope

     console.log(def);
     console.log(abc);
      return function( ){
        console.log(def);

     }
 }
 let re=look();
 re()
/////////////////
let cap=4;//global
function na(df){
    let nap=6;//child
    console.log(cap)
    return function(){ //annoynamus scope
        console.log(df+cap)
    }
}
let cu=na(7) //ya second k liye ku k return ki value lenny k lia declare krty hain 
cu();//for empty function
let ce=na(10);
ce();
///
let d="yes";
function print(ab){
    
    let f="no"
    return function(cd){
        console.log(ab*cd)
    }
}
let innerfunction=print(3);
innerfunction(5) //when we use annoynamus scope we call like that

function simp(url){
    return function(){
       console.log(url)
    }
}
let simpl=simp("https://www.facebook.com/groups/links.school/");
simpl()
simpl()











