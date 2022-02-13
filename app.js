const colors = ["grennt" , "red" , "rgba(133 , 122, 200)", "#F15025" ];

var btn = document.getElementById("btn");
var color = document.querySelector(".color");

btn.addEventListener("click" , function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    var myRndNumber = Math.floor(Math.random() * colors.length );
    return myRndNumber;
}
