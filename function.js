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

//with one argument but more number of parameters.
function fun2(x, y, z)
{
	if y==undefined
	{
		return x
	}
	else if x==undefined and y==undefined
	{
		return x
	}
	return x+y+z;
}
console.log(fun2(5));
console.log(fun2(5,6));
console.log(fun2(5,6,7));
console.log(fun2(5,6,7,8));
