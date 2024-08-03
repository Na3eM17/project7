
const slides = document.querySelectorAll(".slides .slide");
let slideIndex = -0;
let intrevalId = null;

document.addEventListener("DOMContentLoaded" , initilaizeSlider);

function initilaizeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intrevalId = setInterval(nextSlide , 5000);
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length -1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });

    slides[slideIndex].classList.add("displaySlide");

}

function nextSlide(){
    slideIndex ++;
    showSlide(slideIndex);
}

function prevSlide(){
    slideIndex --;
    showSlide(slideIndex);
}

const slides2 = document.querySelectorAll(".slides2 .slide2");
let slideIndex1 = 0;
let intrevalId1 = null;

document.addEventListener("DOMContentLoaded" , initilaizeSlider2);

function initilaizeSlider2(){
    if(slides2.length > 0){
        slides2[slideIndex1].classList.add("displaySlide2");
        intrevalId1 = setInterval(nextSlide2 , 3000);
    }
    
}

function showSlide2(index){

    if(index >= slides2.length){
        slideIndex1 = 0;
    }else if(index < 0){
        slideIndex1 = slides2.length -1;
    }
    slides2.forEach(slide2 =>{
        slide2.classList.remove("displaySlide2");
    });

    slides2[slideIndex1].classList.add("displaySlide2");
}

function nextSlide2(){
    slideIndex1 ++;
    showSlide2(slideIndex1);
}

function prevSlide2(){
    slideIndex1 --;
    showSlide2(slideIndex1);
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

let menue = document.getElementById("mm");
let display=0;
function show(){
    if(display == 0){
        menue.style.display = "flex";
        display = 1;
    }else{
        menue.style.display = "none";
        display = 0;
    }
}

const views = document.querySelectorAll("#view");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        observer.unobserve(entry);
        }
    });

} 
);

views.forEach(card =>{
    observer.observe(card);
});