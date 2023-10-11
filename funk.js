/*
function func(num){
    num = num**3 
    console.log(num)
}

func(3)


function func(num1, num2, num3){
    let sum = num1 + num2 + num3
    console.log(sum)
}

func(13, 13, 13) 

function func(num1, num2, num3){
    let sum = num1 + num2 + num3
    console.log(sum)
}

let param1 = 1;
let param2 = 2;
let param3 = 3;

func(param1, param2, param3)

//
function func(num=2){
    console.log(num)
}

func()
//

function func(num1 = 0, num2 = 0) {
	console.log(num1 + num2);
}

func(2, 3);
func(3);
func();
//

function func(num){
    return num**3 
}

let res = func(3)
console.log(res)

function func(num){
    return Math.sqrt(num)
}

console.log(func(9) + func(4))


function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}   

function round(num) {
	return num.toFixed(3);
}

let res = round(sum(sqrt(9), sqrt(2), sqrt(16)))
console.log(res)

function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
    return sum;
}

console.log( func(5) );

function func(num){
    let count = 0 
    while(num>=10){
        num = num/2
        count += 1
    }
    return count; 
}

console.log(func(43))

function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return num1 * num2;
	} else {
		return num1 - num2;
	}
}

console.log(func(-1, -9));

function func(arr){
    for(elem of arr){
        if(elem%2==1){
            return false
        }
    }
    return true
}

let grr = [2, 2, 2, 2, 3]
console.log(func(grr))

function func(num){
    num = String(num)
    for(i=0; i<2; i++){
        if(num[i]%2==0){
            return false
        }
    }
    return true
}
console.log(func(222))

//Поиск ошибок
function func1(num1) {
	console.log(num1);
    return num1; 
}
function func2(num2) {
	console.log(num2);
    return num2; 
}

console.log(func1(3) + func2(5));

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
    return res;
}

console.log(sum([1, 2, 3, 4, 5]));

let arr = [1, 2, 3, 4, 6];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	console.log(res);
}

func(arr)

function func1(num1) {
	return num1;
}
function func2(num2) {
	return num2;
}

console.log(func1(3) + func2(5));


console.log(sum([1, 2, 3, 4, 5]));

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
}

//Практика 
function sumArr(arr){
    let res = 0 
    for(elem of arr){
        res += elem
    }
    return res
}

let newArr = [1, 1, 1, 2]
console.log(sumArr(newArr))



function findDivider(num){
    let dividers = []
    for(let i=1; i<=num; i++){
        if (num%i===0){
            dividers.push(i)
        }
    }
    return dividers; 
}

console.log(findDivider(14))



function stringToArray(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
  }
console.log(stringToArray('Олександр'))



function stringToArray(str) {
    let arr = [];
    for (let i = str.length-1; i>=0; i--) {
      arr.push(str[i]);
    }
    return arr;
  }
console.log(stringToArray('Олександр'))


function func(num){
    let arr = []
    for(i=1; i<=num; i++){
        arr.push(i)
    }
    return console.log(arr)
}

func(45)



function func(num) {
    let sum = 0;
    let numString = String(num);
  
    for (let i = 0; i < numString.length; i++) {
      sum += Number(numString[i]);
    }
  
    return console.log(sum);
  }

  func(351)
  

  function func(seconds) {
    let minutes = seconds / 60;
    let hours = minutes / 60;
    let days = hours / 24;
    
    return days;
  }
  */


  function func(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }