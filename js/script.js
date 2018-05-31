/* OPEN MENU DESKTOP */

var openMenu = false;

function menuBurgerDesktop() {

    if (openMenu) {
        document.querySelector('#Trait1').style.transform = "rotate(0deg) scaleX(1)";
        document.querySelector('#Trait2').style.transform = "rotate(0deg) scaleX(1)";
        document.querySelector('#Trait3').style.transform = "rotate(0deg) scaleX(1)";

        
        document.querySelector('.menuBurger').style.opacity = "0";
        document.querySelector('.menuBurger').style.marginLeft = "-100vw";
        

        openMenu = false;
    } else {
        document.querySelector('#Trait1').style.transform = "rotate(45deg) scaleX(1.18)";
        document.querySelector('#Trait2').style.transform = "rotate(0deg) scaleX(0)";
        document.querySelector('#Trait3').style.transform = "rotate(-45deg) scaleX(1.18)";

        document.querySelector('.menuBurger').style.opacity = "1";
        document.querySelector('.menuBurger').style.marginLeft = "0vw";
        

        openMenu = true;
    }

}

/* ABOUT IMAGES CLÉS */

window.addEventListener("load", function() {
    var showAvion = document.getElementById("motAvion"),
        avion = document.getElementById("avion");

        showAvion.addEventListener("mouseenter", function() {
        avion.style.display = "block";
    });
    showAvion.addEventListener("mouseleave", function() {
        avion.style.display = "none";
 
    });
});

window.addEventListener("load", function() {
    var showCrossfit = document.getElementById("motCrossfit"),
        crossfit = document.getElementById("crossfit");

        showCrossfit.addEventListener("mouseenter", function() {
        crossfit.style.display = "block";
    });
    showCrossfit.addEventListener("mouseleave", function() {
        crossfit.style.display = "none";
    });
});