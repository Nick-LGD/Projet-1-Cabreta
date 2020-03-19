const darkMod = document.getElementById("darkMode");
const logoCabreta = document.getElementById("logo");
const rootElt = document.documentElement;

darkMod.onclick = function(){

    if(rootElt.getAttribute('data-theme') === 'dark'){  // White mode
        rootElt.setAttribute('data-theme', 'light');
        logoCabreta.src = "images/logo/CabretaLogoBlack1.png";
    }else { // Black mode
        rootElt.setAttribute('data-theme', 'dark');
        logoCabreta.src = "images/logo/CabretaLogoWhite.png";
    }
    sessionStorage.setItem("logo", logoCabreta.src);
    sessionStorage.setItem("colorMod", rootElt.getAttribute('data-theme'));


};

rootElt.setAttribute('data-theme', sessionStorage.getItem("colorMod"));
logoCabreta.src = sessionStorage.getItem("logo");




