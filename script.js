
// First Button

let first = document.getElementById('firstbutton');
first.onmouseover = function firstbuttonhover(){
    first.classList.remove('button1');
    first.classList.add('button1hover');
    }
first.onmouseout = function firstbuttonhoverout(){
    first.classList.remove('button1hover');
    first.classList.add('button1');

    }

// Second Button

let second = document.getElementById('secondbutton');
second.onmouseover = function secondbuttonhover(){
    second.classList.remove('button2');
    second.classList.add('button2hover');
    }
second.onmouseout = function secondbuttonhoverout(){
    second.classList.remove('button2hover');
    second.classList.add('button2');

    }

// Third Button

let third = document.getElementById('thirdbutton');
third.onmouseover = function thirdbuttonhover(){
    third.classList.remove('button3');
    third.classList.add('button3hover');
    }
third.onmouseout = function thirdbuttonhoverout(){
    third.classList.remove('button3hover');
    third.classList.add('button3');

    }



// Carousel

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');
var Xwidth = 0;
var direction;

prev.addEventListener('click', () => {
    setTimeout(() => {
        track.prepend(track.lastElementChild)
    },150)
    
})

next.addEventListener('click', () => {
    setTimeout(() => {
    track.appendChild(track.firstElementChild);
},150)
})

// Testimonials

let elementactive = document.getElementsByClassName('active')[0];
let elementactiveid = elementactive.id;

const tbutton1 = document.getElementById('tbutton1');
const tbutton2 = document.getElementById('tbutton2');
const tbutton3 = document.getElementById('tbutton3');
const tbutton4 = document.getElementById('tbutton4');
const tbutton5 = document.getElementById('tbutton5');
const tbutton6 = document.getElementById('tbutton6');


if (elementactiveid === 'testimonial1') {
    tbutton1.classList.add('bactive');
}

tbutton1.onclick = function() {
    let buttonactive = document.getElementsByClassName('bactive')[0];
    buttonactive.classList.remove('bactive');
    tbutton1.classList.add('bactive');
    elementactive.classList.remove('active');
    elementactive = document.getElementById('testimonial1');
    elementactive.classList.add('active');
}

tbutton2.onclick = function() {
    let buttonactive = document.getElementsByClassName('bactive')[0];
    buttonactive.classList.remove('bactive');
    tbutton2.classList.add('bactive');
    elementactive.classList.remove('active');
    elementactive = document.getElementById('testimonial2');
    elementactive.classList.add('active');
}

tbutton3.onclick = function() {
    let buttonactive = document.getElementsByClassName('bactive')[0];
    buttonactive.classList.remove('bactive');
    tbutton3.classList.add('bactive');
    elementactive.classList.remove('active');
    elementactive = document.getElementById('testimonial3');
    elementactive.classList.add('active');
}

tbutton4.onclick = function() {
    let buttonactive = document.getElementsByClassName('bactive')[0];
    buttonactive.classList.remove('bactive');
    tbutton4.classList.add('bactive');
    elementactive.classList.remove('active');
    elementactive = document.getElementById('testimonial4');
    elementactive.classList.add('active');
}

tbutton5.onclick = function() {
    let buttonactive = document.getElementsByClassName('bactive')[0];
    buttonactive.classList.remove('bactive');
    tbutton5.classList.add('bactive');
    elementactive.classList.remove('active');
    elementactive = document.getElementById('testimonial5');
    elementactive.classList.add('active');
}

tbutton6.onclick = function() {
    let buttonactive = document.getElementsByClassName('bactive')[0];
    buttonactive.classList.remove('bactive');
    tbutton6.classList.add('bactive');
    elementactive.classList.remove('active');
    elementactive = document.getElementById('testimonial6');
    elementactive.classList.add('active');
}


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});