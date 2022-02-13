const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F' ];
var btn = document.getElementById("btn");
var color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    var colerHex = "#";
    for( var i=0; i<6; i++){
        colerHex += hex [getRandomNumber()];
    }
    color.textContent =colerHex;
    document.body.style.backgroundColor = colerHex;
});

function getRandomNumber(){
   
    return Math.floor(Math.random() * hex.length);
}




