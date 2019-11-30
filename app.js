const ham = document.getElementsByClassName("ham");
const menu = document.getElementsByClassName("pages");

ham[0].addEventListener("click", function(){
    console.log("funguje");
    menu[0].classList.toggle("active");
});
