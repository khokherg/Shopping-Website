var code = [];
var numOfItems = 0;
function PCode()
{

for(var i=2;i<6;i++)
{
code[i] = Math.round(Math.random()*10);
}
var possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var i=0;i<2;i++)
{
code[0]=possibleChar.charAt(Math.round(Math.random()*possibleChar.length));
code[1]=possibleChar.charAt(Math.round(Math.random()*possibleChar.length));
}

document.getElementById("pcode").innerHTML = "Use This Code "+code.join("");
}

document.getElementById("b1").onclick = function()
{
	
	window.open("item1.html");
}
document.getElementById("b2").onclick = function()
{
	
	window.open("item2.html");
}
function show_confirm()
{
var ask = confirm("Are you sure to send feedback?");
if(ask == true)
{
alert("Your feedback has been submitted successfully");
var conf= confirm("Do you want to continue shopping?");
if(conf==true)
{
window.open("items.html");
}
else
{
alert("your form has been submitted");
}
}
else
{
alert("Feedback has not been submitted");
}
}function login()
{
var un = document.getElementById("uname").value;
var pas = document.getElementById("passwd").value;
if(un!="" && pas!="")
{
if (un=="gurpreet" && pas=="gurpreet")
{
window.open("items.html");
}
else
{
alert("wrong! Try again");
}
}
else
{
alert("Fill the fields first");
}

}
var code = [];
var numOfItems = 0;
function PCode()
{

for(var i=2;i<6;i++)
{
code[i] = Math.round(Math.random()*10);
}
var possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(var i=0;i<2;i++)
{
code[0]=possibleChar.charAt(Math.round(Math.random()*possibleChar.length));
code[1]=possibleChar.charAt(Math.round(Math.random()*possibleChar.length));
}

document.getElementById("pcode").innerHTML = "Use This Code "+code.join("");
}
function total()
{
var itemPrice = 200;
var ins =0;

/*if(document.getElementById("b2").clicked)
{
	itemPrice =300;
	
}*/

var newPrice = itemPrice;
document.getElementById("price").innerHTML = itemPrice;
document.getElementById("qty").innerHTML = document.getElementById("quantity").value;
if(document.getElementById("ins").checked)
{
ins = itemPrice*10/100;
newPrice =itemPrice + ins;

}
else
{
	alert("Please check one of the given option of insurance");
	
}
document.getElementById("insurance").innerHTML = "$"+ins;


newPrice = parseFloat(document.getElementById("quantity").value)*newPrice;
var dis =0;

/*if(document.getElementById("heading").value==code.join(""))
{
dis = newPrice*10/100;
newPrice = newPrice - dis;

}*/
document.getElementById("discount").innerHTML = "$"+dis;

var tax = newPrice*13/100;
document.getElementById("tax").innerHTML = "$"+tax;
var subTotal = tax + newPrice;
if(document.getElementById("giftWrap").checked)
{
subTotal = subTotal+ 9.99;
}

document.getElementById("subtotal").innerHTML = "$"+subTotal;
if(document.getElementById("standard").checked)
{
var total = subTotal + 4.99;
document.getElementById("shipping").innerHTML = "$"+4.99;
}
else if(document.getElementById("exp").checked)
{
total = subTotal+ 19.99;
document.getElementById("shipping").innerHTML = "$"+19.99;
}
document.getElementById("total").innerHTML = "$"+total;
}
function goToFeedBack()
{


location.href="feedback.html";

}