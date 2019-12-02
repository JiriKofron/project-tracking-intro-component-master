const ham = document.getElementsByClassName("ham");
const menu = document.getElementsByClassName("pages");
const bar1 = document.getElementsByClassName("bar1");
const bar2 = document.getElementsByClassName("bar2");
const bar3 = document.getElementsByClassName("bar3");

ham[0].addEventListener("click", function(){
    menu[0].classList.toggle("active");
});

ham[0].addEventListener("click", function(){
    if(menu[0].classList.contains("active")){
        bar1[0].style.transform = "rotate(45deg)";
        bar2[0].style.display = "none";
        bar3[0].style.transform = "rotate(-45deg)";
    } else {
        bar1[0].style.transform = "none";
        bar2[0].style.display = "block";
        bar3[0].style.transform = "none";
    };
    });
