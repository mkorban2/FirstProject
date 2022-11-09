var num1= prompt("Enter first number");
var num2= prompt("Enter second number");
var num3= prompt("Enter third number");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);

if(num2 <= num1 && num3 <= num1)
{
    console.log(num1+"is the largest number");
}
else if(num1 <= num2 && num3 <= num2){
    console.log(num2+"is the largest number");
}
else
{
    console.log(num3+" is the largest number");
}