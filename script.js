const text = [
    "AI & Python Developer",
    "Machine Learning Enthusiast",
    "Computer Vision Developer",
    "OpenCV Developer",
    "CustomTkinter Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1500);

    }

    else{

        setTimeout(type,90);

    }

})();

// ================= BACK TO TOP =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});