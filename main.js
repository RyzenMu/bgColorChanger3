
console.log('Hello World');

firstPara = document.querySelector('#Color');

console.log(firstPara.value);

secondPara = document.querySelector('#div-2');

if (firstPara.value == 'red') {
    secondPara.style.color = "red";
}
else if (firstPara.value == 'blue') {
    secondPara.style.color = "blue";
}
else if (firstPara.value == 'green') {
    secondPara.style.color = "green";
}



