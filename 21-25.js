// Chapter 20 to 25
// Task 1

var firstName,lastName,fullName;
firstName=prompt("Enter your first name:");
lastName=prompt("Enter your last name");
fullName=firstName+" "+lastName;
alert("Hello! "+fullName);

// Task 2
var favMobmodel,leng;
favMobmodel=prompt("Input your fav brand mobile phone model:");
document.write("My favorite phone is: "+favMobmodel+"<br>");
leng=favMobmodel.length;
document.write("Length of string: "+leng+"<br>");

// Task 3
var i,stg="Pakistani";

document.write("String: "+stg+"<br>");
for(i=0;i<stg.length;i++){
if(stg[i]=='n'){
document.write("Index of 'n': "+i+"<br>");
}


}
// Task 4
var stng="Hello World";
document.write("String: "+stng+"<br>");
document.write("Last index of 'I': "+stng.lastIndexOf('l'));

// Task 5
var stng1="Pakistani";
document.write("String: "+stng1+"<br>");
document.write("Character at index 3: "+stng1.charAt(3)+"<br>");

// Task 6
var firstName,lastName,fullName;
firstName=prompt("Enter your first name:");
lastName=prompt("Enter your last name");
// fullName=string.concat(firstName,lastName);
document.write(fullName);

// Task 7
var city="Hyderabad";

document.write("City: "+city+"<br>");
document.write("After replacement: "+city.replace("Hyder","Islam")+"<br>");

// Task 8
var message="Ali and Sami are best friends. They play cricket and football together";

document.write(message+"<br>");
document.write(message.replace(/and/g,"&")+"<br>");

// Task 9
var stng2="472";

document.write("Value: "+stng2+"<br>"+"Type: "+typeof(stng2)+"<br>");
var convert=Number(stng2);
document.write("Value: "+stng2+"<br>"+"Type: "+typeof(convert)+"<br>");

// Task 10
var input="peanuts";

document.write("User input: "+input+"<br>");
document.write("Upper case: "+input.toUpperCase());

// Task 11
var input1="javascript";
var part1=input1.charAt(0);
var part2=input1.slice(1,10);
var part3=part1.toUpperCase()+part2;
document.write("<br>User input: "+input1+"<br>");
document.write("Title case: "+part3+"<br>");


// Task 12
var num=35.36;
var num1=num.toString();
document.write("Number: "+num+"<br>"+"Result: "+num1);
alert(typeof(num1));

// Task 13
var username=prompt("Enter your UserName: ");

for(var i=0;i<username.length;i++){
if(username.charCodeAt(i)==33||username.charCodeAt(i)==44||username.charCodeAt(i)==46||username.charCodeAt(i)==64)
{
alert("Please enter a valid username");
}
}

// Task 14
var arr=["cake","apple pie","cookie","chips","patties"];
var userInput=prompt("Enter a word to search");
var userInputconv=userInput.toLowerCase();

if(arr.indexOf(userInputconv)!==-1){
alert(userInputconv+" is available at index "+arr.indexOf(userInputconv)+" in our bakery");
}
else{
    alert(userInputconv+" is not available in our bakery ");


}



// Task 15
var password=prompt("Enter the password:");

if(password.charCodeAt(0)>=48 && password.charCodeAt(0)<=57){
document.write("<br>number");

}
//      if(password>=65&&password<=90||password>=97&&password<=122){
// document.write("alphabet");

//      }
// var letters=/^[0-9a-zA-Z]+$/;
// if(password.match(letters)){

//     document.write("<br>aphanu");
// }



    //  Task 16
    var university="University of Karachi";

    university.split(" ");
    document.write("<br>");

    for(var j=0;j<university.length;j++){

document.write(university[j]+"<br>");
}

// Task 17
var user_input="Pakistan";

document.write("User Input: "+user_input+"<br>"+"Last character of input: "+user_input[user_input.length-1]);

// Task 18
var str="The quick box for jumps over the lazy dog."
var Count=0;
document.write("Text: "+str+"<br>");
// str.split(" ");
for(var i=0;i<str.length;i++){
if(str==str.match(/The/g)){
    
Count++;
}

}
document.write(Count);






// Chapter 26 to 30

// Task 1
var num2=+prompt("Enter the positive floating point value:");
document.write("number: "+num2+"<br>");
document.write("round off value: "+Math.round(num2)+"<br>");
document.write("floor value: "+Math.floor(num2)+"<br>");
document.write("ceil value: "+Math.ceil(num2)+"<br>");

// Task 2
var num3=+prompt("Enter the Negative floating point value:");
document.write("number: "+num3+"<br>");
document.write("round off value: "+Math.round(num3)+"<br>");
document.write("floor value: "+Math.floor(num3)+"<br>");
document.write("ceil value: "+Math.ceil(num3)+"<br>");

// Task 3
var num5,num4=+prompt("Enter the number to check its absolute value: ");
num5=-num4;

document.write("<br>Absolute value of "+num4+" is "+ num5+"<br>");

// Task 4
var num6=Math.floor(Math.random()*6)+1;
var num7=Math.floor(Math.random()*6)+1;
document.write("random dice value: "+Math.round(num6)+"<br>");
document.write("random dice value: "+Math.round(num7)+"<br>");

// Task 5
var dice1=Math.floor(Math.random()*2)+1;
var dice2=Math.floor(Math.random()*2)+1;
document.write(dice1+"<br>");
if(dice1==1||dice2==1){
document.write("random coin value: Heads<br>");
}

document.write(dice2+"<br>");
if(dice2==2||dice1==2){
document.write("random coin value: Tails<br>");
}


// Task 6
var randomNum=Math.floor(Math.random()*100)+1;
document.write("random number between 1 and 100: "+randomNum+"<br>");

// Task 7
var weight=prompt("Enter your weight in kilograms");
document.write("Possible user inputs can be:<br>");
document.write("a.50<br>b.50kgs<br>c.50.2kgs<br>d.50.8kilograms<br>");

document.write("The weight of user is "+weight+"<br>");


// Task 8
var secretNum=Math.floor(Math.random()*10)+1;

var inputNum=+prompt("Enter the number from 1 to 10:");

if(secretNum===inputNum){

document.write("Congratulations! your input number is matched<br>");


}
else{
    document.write("We ars sorry! your input number didn't match<br>");


}


// Chapter 31 to 34
// Task 1
var todayDate=new Date();
document.write("<br>"+todayDate+"<br>");


// Task 2
var monthNames=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var Month=monthNames[todayDate.getMonth()];
document.write("Current month: "+Month+"<br>");

// Task 3
var dayNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var Day=dayNames[todayDate.getDay()];
document.write("Today is "+Day+"<br>");

// Task 4

if(todayDate.getDay()==0||todayDate.getDay()==6){
document.write("It's Fun day");

}

// Task 5

if(todayDate.getDate()>=1&&todayDate.getDate()<=15){

document.write("<br>First Fifteen days of month<br>");
}
else{
document.write("<br>Last days of month<br>");

}

// Task 6
var anotherDate=new Date("Jan 01, 1970");//User define date
var today=new Date();
// anotherDate.setDate(1);
// anotherDate.setMonth(0);
// anotherDate.setFullYear(1970);

// anotherDate.setSeconds(0);
// anotherDate.setMilliseconds(0);
// anotherDate.setMinutes(0);
// anotherDate.setHours(0);

var anotherDatemili=anotherDate.getTime();
var todaymili=today.getTime();
var diff= todaymili - anotherDatemili ;
// var diffyear=diff/(1000*60*60*24*30*12);
document.write(anotherDate+"<br>"+anotherDatemili+"<br>"+todaymili+"<br>"+diff+"<br>");


// Task 7
var hours=today.getHours();

if(hours>=0&&hours<=11){
document.write("It's AM");

}
else{

    document.write("It's PM");

}

// Task 8
var laterdate=new Date("Dec 31, 2020");

document.write("<br>"+laterdate+"<br>");

// Task 9
var ramdanDate=new Date("Jun/18/2015");
var randomDate=new Date("Aug/18/2015")
document.write("Date of Ramdan : "+ramdanDate+"<br>"+"Today's Date : "+randomDate+"<br>")
var diffDays=randomDate.getTime() - ramdanDate.getTime();
var x=diffDays/(1000*3600*24);
document.write(x+" Days have passed since 1st Ramadan, 2015");

// Task 10
var begOf2015=new Date("Jan 1, 2015");
var refDate=new Date("Dec 05, 2015");

var Diff=refDate.getTime() - begOf2015.getTime();
var y=Diff/(1000);
document.write("<br>"+"Our Reference Date: "+ refDate+"<br>"+y+" seconds had passed since beginning of 2015<br>");

// Task 11
var subHour=today.getHours()-1;
var b=new Date();
b.setHours(subHour);
document.write("<br> current date: "+today+"<br> 1 hour ago,it was "+b+"<br>");






// Task 12
var  subYear=today.getFullYear()-100;
var c=new Date();
c.setFullYear(subYear);
alert("current date: "+today+"\n"+"100 years back, it was "+c);




// Task 13
var Age=+prompt("Input your Age to check the year:");
var thisyear=today.getFullYear();
var BirthYear=thisyear-Age;
document.write("Your age is "+Age+"<br>"+"Your birth year is "+BirthYear);

// Task 14
var customerName="ABC Customer";
var currentMonth=monthNames[today.getMonth()];
var units=410;
var chargesPerunit=16;
var total=units*chargesPerunit;
document.write("<br>"+"<h1>Electricity Bill </h1><br>");
document.write("Customer Name: "+customerName+"<br>");
document.write("Month: "+currentMonth+"<br>");
document.write("Number of units: "+units+"<br>");
document.write("Charges per unit: "+chargesPerunit+"<br><br>");
document.write("Net Amount Payable (within Due Date): "+total+"<br>");
document.write("Gross Amount Payable (after Due Date): "+(total+350)+"<br>");

// Chapter 35 to 38
// Task 1
function currDate(){
var currentDate=new Date();
 document.write("<br>"+currentDate);
}
currDate();
// Task 2
function greet(){
firstname=prompt("Enter your first name");
lastname=prompt("Enter your last name");
alert("Hello! "+firstname+" "+lastname);
}

greet();

// Task 3
var firstNo=+prompt("Enter the first No: ");
var secondNo=+prompt("Enter the second No: ");
var add= add(firstNo,secondNo);
function add(a,b){
var sum =a+b;
return sum;
}
document.write("<br>Sum of "+firstNo+" and "+secondNo+" is " +add);

// Task 4
var no1=+prompt("Enter the first No ");
var oper=prompt("Enter a operator (i.e:+,-,*,/) ");
var no2=+prompt("Enter the second No ");
// var c,d,e;
var op=operation(no1,oper,no2);
function operation(bb,cc,dd){
    
    if(cc=='+'){
var perform=bb+dd;
}
if(cc=='-'){
    var perform=bb-dd;
}
if(cc=='*'){
    var perform=bb*dd;
}

if(cc=='/'){
    var perform=bb/dd;
}

if(cc=='%'){
    var perform=bb%dd;
}



return perform;

}
alert(no1+" "+oper+" "+no2+" = "+op); //Incom


// Task 5
var sqNum=+prompt("Enter a number to get this square: ");
sqResult=square(sqNum);
function square(numsq){

var sq=numsq*numsq;
return sq;
}
document.write("<br><h3>Square of "+sqNum+" is "+sqResult+"<br></h3>");



// Task 6
var factorial=+prompt("Enter a number to get factorial");
var facResult=facNum(factorial);
function facNum(facNo){
    var i,fac=1;
for(i=1;i<=facNo;i++){
    
fac=i*fac;
}

return fac;
}
document.write("<br><h4>Factorial of "+factorial+" is "  +facResult+"</h4><br>");

// Task 7
document.write("<br><h2>Counting</h2><br>");
var startNum=+prompt("Enter a starting number for counting");
var endNum=+prompt("Enter a ending number for counting");
counting(startNum,endNum);
function counting(startNo,endNo){

for(startNo;startNo<=endNo;startNo++)

document.write(startNo+"<br>")


}

// Task 8

var base=+prompt("Input the base of triangle");
var perpendicular=+prompt("Input the perpendicular of triangle:");
var hypSq;

hypotenuse(base,perpendicular);
function hypotenuse(b,p){

     hypSq= baseSq(b)+perpSq(p);

    function baseSq(b){
var sq1=b*b;
return sq1;
}
    function perpSq(p){
        var sq2=p*p;
        return sq2;
        }



}
document.write("Hypotenuse <sup>2</sup> = "+hypSq+"<br>");

// Task 9
var width=+prompt("Enter the width of rectangle");
var height=+prompt("Enter the height of rectangle");

var area1=areaCalc(width,height);
var area2=areaCalc(5,4);

function areaCalc(w,h){

a=w*h;
return a;

}
document.write("<br>Area of triangle(Arguments as variable): "+area1+"<br>");

document.write("<br>Area of triangle(Arguments as value): "+area2+"<br>");


// Task 10
var str15=prompt("Enter a string to check whether it is palindrome or not");

// var rver=str15.split();

// document.write(str15+rver.reverse());


var strRev=Palindrome(str15);

function Palindrome(check12){
var stringSplit=check12.split();
var rev=stringSplit.reverse();
// document.write(rev);
return rev;
}


if(str15==strRev){

    document.write("<br>Your Input string is palindrome! <br>");
}
else{
    document.write("<br>Your Input string is not palindrome! <br>");

}




//Task 11
var line="the quick brown fox";


var one=upperCase(line);
function upperCase(line1) {
    var words=line1.split(' ');
    var capWords=[];
    var element=[];
    words.forEach(element =>{
        capWords.push(element[0].toUpperCase()+element.slice(1,element.length));
        
    });
    return capWords.join(' ');
}


document.write("<br>"+line+"<br>"+one);


// Task 12

function longestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    var word=null;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
      word=strSplit[i];
       }
    }
    return word;
  }
  var one=longestWord("Web Development Tutorial");
  document.write("<br>"+one);

// Task 13
var stringOne=prompt("Enter a string");
var letter=prompt("Enter a character to check the number of occurences :");
var stringConvert=stringOne.toUpperCase();
var letterConvert=letter.toUpperCase();

var letterCount=wordCalc(stringConvert,letterConvert);
function wordCalc(string1,letter1) {
    var countLetter=0;
    for(var i=0;i<string1.length;i++){
if(string1[i]==letter1){
countLetter++;

}

}

return countLetter;
}

document.write("<br>"+ stringOne+"<br>"+"letter to search in a string: "+letter+"<br>"+letterCount);



// Task 14
document.write("<h3>The Geometrizer</h3>");
var radius=+prompt("Enter a radius");

var circumCircle=calcCircum(radius);
var circumCirclearea=calcArea(radius);

function calcCircum(rad) {

    var circum=2*3.142*rad;
    return circum;
}

function calcArea(rad) {
    var circumArea=3.142*rad*rad;
    return circumArea;
}
document.write("The circumference is "+circumCircle);
document.write("<br>The area is "+circumCirclearea);