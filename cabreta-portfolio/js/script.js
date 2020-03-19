
// ---- DARKMODE ----
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

// SORT PICTURES
// const btnSort = document.getElementsByClassName('btn');
// console.log(btnSort);

const showAll = document.getElementById("showAll");
const sport = document.getElementById("sport");
const cooking = document.getElementById("cooking");
const technology = document.getElementById("technology");


function resetSort(){
    showAll.style.display = "none";
    sport.style.display = "none";
    cooking.style.display = "none";
    technology.style.display = "none";
}

function filterSelection(filter){
    resetSort();
    switch (filter) {
        case 'all':
            console.log('showall')
            showAll.style.display = 'grid';
            break;
        case 'sport':
            console.log('sport')
            sport.style.display = 'grid';
            break;
        case 'cooking':
            console.log('cooking')
            cooking.style.display = 'grid';
            break;
        case 'technology':
            console.log('technology')
            technology.style.display = 'grid';
            break;
        default:
            break;
    }
}
let gallery = document.getElementById("showAll");
// console.log(gallery);

// for(let i = 0; i < gallery.length; i++ ){
//     console.log(gallery[i].children[0]);
//     gallery[i].children[0].style.borderRadius = "60px";
// }
// console.log(document.getElementById("showAll").children[0].children[0])
