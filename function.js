//without any argument
function fun()
{
	console.log('Hello');
}

fun();

//with argument
function fun1(name)
{
	console.log('Hello ' + name + '!');
}

name='Srini'
fun1(name);

//Optional Argument.
function fun2(x, y, z)
{
	if(y==undefined && z==undefined)
	{
		return x
	}
	else if (z==undefined)
	{
		return x+y
	}
	else
	{
		return x+y+z;
	}
}
console.log(fun2(5));
console.log(fun2(5,6));
console.log(fun2(5,6,7));
console.log(fun2(5,6,7,8));

//Default argument.
function fun3(x, y=5)
{

	return x+y;
	
}
console.log(fun3(5));
console.log(fun3(5,6));

//Closure

function fun4(x)
{
	function fun5(y)
	{
		return y**x;
	}
	return fun5;
}

var square=fun4(2)
console.log(square(2));
console.log(square(3));
var queue=fun4(3)
console.log(queue(2));
console.log(queue(3));

//Recursion - Factorial

function fun5(x)
{
if(x==1)
{
	return 1
}
else
{
	fact=1
	return fact=x*fun5(x-1)
}	
}

console.log(fun5(5));
console.log(fun5(6));

//Arrow functions

var a=5;
var b=5;
const sum1 = (a,b) => {return a*b};
const sum2 = (a,b) => a*b;
console.log('Sum1 :- ' + sum1(a,b));
console.log('Sum2 :- ' + sum2(a,b));
