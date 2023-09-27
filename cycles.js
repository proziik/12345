/*
//144 выведите в консоль все элементы следующего массива:
let arr = [1, 2, 3, 4, 5, 6]

for(let elem of arr){
    console.log(elem)
}

//145 выведите в консоль все ключи следующего объекта и все элементы следующего объекта:
let obj={a:1, b:2, c:3}

for(let key in obj){
    console.log(key)
}

for(let key in obj){
    console.log(obj[key])
}


//Переберите циклом числа от 10 до 1000 и выведите в консоль сумму первой и второй цифры каждого числа.
let res = 0 
for (let i=10; i<=1000; i++){
    str_i = String(i)
    res = +str_i[0] + +str_i[1]
    console.log(res)
}

//Переберите циклом числа от 10 до 1000 и выведите те числа, первая цифра которых равна 1.
for (let i = 1; i <= 1000; i++) {
	let str = String(i); 

	if (str[0] === '1') {
		console.log(i);
	}
}
///////////////////////////////////////////

let res = 0 
for (let i=10; i<=1000; i++){
    str_i = String(i)
    res = Number(str_i[0]) + Number(str_i[1])
    if (res==5){
        console.log(i)
    }

}

//Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
let arr = [ 2, 3, 4, -1, 8, 8, 8];
let res = 0; 
let elem = 0
for(elem of arr){
    res+=elem 
    if(elem<= 0){
        break; 
    }
}
console.log(res)
//

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let elem of arr) {
	let result;
	
	if (elem % 2 === 0) {
		result = elem * elem;
	} else if (elem % 3 === 0) {
		result = elem * elem * elem;
	}
    else{
        continue
    }
	
	console.log(result); // вынесли вывод за условие
}

//Практика

let arr = []
for (i=1; i<=100; i++){
    console.log(i)
    arr.push(i)
}
console.log(arr)


let arr = []
for (i=100; i>=1; i--){
    console.log(i)
    arr.push(i)
}
console.log(arr)

//3
let arr = []
for (i=1; i<=100; i++){
    arr.push(i)
}

let arr2 = []

for (elem of arr){
    if (elem%2==0){
        arr2.push(elem)
    }
}
console.log(arr2)

let arr = []
for (i=0; i<10; i++){
    arr.push('x')
}
console.log(arr)


function getrandomint (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = []
let arr2 = []

for (i=1; i<100; i++){
    let randomNum = getrandomint(1, 40) 
    arr.push(randomNum)
    if (randomNum > 0 && randomNum <= 10){
        arr2.push(randomNum)
    }
}

console.log(arr)
console.log(arr2)

function getrandomint (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = []

for (i=1; i<100; i++){
    let randomNum = getrandomint(1, 10) 
    arr.push(randomNum)
}
console.log(arr)

for (elem of arr){
    if (elem==5){
        console.log('есть')
    }
}


function getrandomint (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = []
res = 0 

for (i=1; i<10; i++){
    let randomNum = getrandomint(1, 10) 
    arr.push(randomNum)
}
console.log(arr)

for (elem of arr){
    res += elem
}
console.log(res)


function getrandomint (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = []
res = 0 

for (i=1; i<5; i++){
    let randomNum = getrandomint(1, 3) 
    arr.push(randomNum)
}
console.log(arr)

for (elem of arr){
    res += elem**2
}
console.log(res)


function getrandomint (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = []
let count = 0 
let sum = 0 

for (i=1; i<5; i++){
    let randomNum = getrandomint(1, 3) 
    arr.push(randomNum)
}
console.log(arr)

for (elem of arr){
    sum += elem 
    count += 1 
}

let res = sum/count
console.log(res)


function getrandomint (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = []
let sum = 0 
let count = 0 
let res = 0 

for (i=1; i<10; i++){
    let randomNum = getrandomint(5, 100) 
    arr.push(randomNum)
}
console.log(arr)

for (elem of arr){
    if (elem%5==0 || elem%10==0){
        sum += elem 
        count += 1 
    }
}

res = sum/count
console.log(res)

function getrandomint (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = []
let sum = 0 
for (i=1; i<10; i++){
    let randomNum = getrandomint(-10, 10) 
    arr.push(randomNum)
}
console.log(arr)

for (elem of arr){
    if (elem>0){
        sum+=elem 
    }
}
console.log(sum)

let arr = [10, 20, 30, 50, 235, 3000];
console.log(arr)
for (elem of arr){
    elem_str = String(elem)
    if (elem_str[0]=='1' || elem_str[0]=='2' || elem_str[0]=='5') {
        console.log(elem_str)
    }
}


let arr = [10, 20, 30, 50, 235, 3000];
let arr2 = []
for (i=arr.length-1; i>=0; i--){
    arr2.push(arr[i])
}
console.log(arr2)
 
//Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
let arr = [1, 2, 2, 5, 6, 7, 6]
let counter = 0 
for (let i=0; i<arr.length; i++){
    if (arr[i]==i){
        console.log(i)
    }
}

let arr = [1, 2, 2, 5, 6, 7, 6]
document.write("<br>")
for (let i=0; i<arr.length; i++){
    document.write(arr[i] + "<br>")
}


let arr = [1, 2, 2, 5, 6, 7, 6]
document.write("<p>")
for (let i=0; i<arr.length; i++){
    document.write(arr[i] + "<p>")
}


let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
for (let i=0; i<days.length; i++){
    if (i>=0 && i<=4){
        document.write(i)
    }
    else {
        document.write("<b>" + i + "</b>")
    }
}

let days = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
let day = "ср"
document.write("<br>")
for (let i=0; i<days.length; i++){
    if (days[i]==day){
        document.write('<em>' + days[i] + '</em>' + "<br>")
    }
    else {
        document.write(days[i] + "<br>")
    }
}
 
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};  

for (let key in obj) {
	obj[key] = (obj[key]/100*10) + obj[key];
}

console.log(obj)
 
let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};  

for (let key in obj) {
    if (obj[key]>=400){
	    obj[key] = (obj[key]/100*10) + obj[key];
    }
}

console.log(obj)

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let newobj = {}

for (let i=0; i<arr1.length; i++) {
    newobj[arr2[i]] = arr1[i]
}

console.log(newobj)

let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
  };
  
let valuesArr = Object.values(obj);
console.log(valuesArr);
let newArr = []
let sum = 0 

for (i=0; i<valuesArr.length; i++){
    elem = String(valuesArr[i])
    if (elem[0]=='1' || elem[0]=='2'){
        newArr.push(valuesArr[i]);
    }
}
console.log(newArr)

let values = ['a', 'b', 'c', 'd', 'e'];
let keys = [1, 2, 3, 4, 5]
let obj = {}

for(i=1; i<values.length+1; i++){
    keys.push(i)
}

for(let j=0; j<values.length; j++){
    obj[keys[j]]=values[j]
}
console.log(obj)
*/
let values = ['a', 'b', 'c', 'd', 'e'];
let keys = [1, 2, 3, 4, 5]
let obj = {}

for(i=1; i<values.length+1; i++){
    keys.push(i)
}

for(let j=0; j<values.length; j++){
    obj[values[j]]=keys[j]
}
console.log(obj)