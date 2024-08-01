
const slides = document.querySelectorAll(".slides .slide");
let slideIndex = 0;
let intrevalId = null;

initilaizeSlider();

function initilaizeSlider(){

    slides[slideIndex].classList.add("displaySlide")
}

function showSlide(){

}

function nextSlide(){

}

function prevSlide(){

}

const slides2 = document.querySelectorAll(".slides2 .slide2");
let slideIndex1 = 0;
let intrevalId1 = null;

initilaizeSlider2();

function initilaizeSlider2(){

    slides2[slideIndex1].classList.add("displaySlide2")
}

function showSlide2(){

}

function nextSlide2(){

}

function prevSlide2(){

}

let one = document.getElementById("one");
let two = document.getElementById("two");

function b1(){
    two.style.display="none";
    one.style.display="flex";
}
function b2(){
    two.style.display="flex";
    one.style.display="none";
}