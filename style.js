var num = prompt("enter the number");
var i = 1;

var sum = 0; // 1+2+3+4+5.....
var pro = 1; //1*2*3*4*5....

while(i <= num )
{
    sum = sum + i;
    pro = pro * i;
    i++;
}

console.log("The sum is "+sum);
console.log("The product is " +pro);

document.write("the sum is" + sum );
document.write("the product is "+ pro);
