

let colors = ['red', 'blue', 'grey', 'green', 'yellow', 'black', 'orange', 'white', 'brown', 'violet'];


button = document.querySelector("button");

button.addEventListener("click", function (){
    r = Math.floor(Math.random()*colors.length)
    console.log(r);
    var i = colors[r];
    document.body.style.background = i;
});



