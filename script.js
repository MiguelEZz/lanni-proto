const desplegable = document.querySelector(".desplegable")
const desplegableCosos = document.querySelector(".desplegable-cosos")

console.log("caca")

// document.addEventListener("click", openDesple)

desplegable.addEventListener("click", taggleDesple )

function taggleDesple (){
desplegableCosos.classList.toggle("inactive");

}