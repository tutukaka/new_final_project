"use strict";


const slider = document.querySelector('.testimonial_text_description_test');
let l = 0;
let clic = document.getElementsByClassName('testimonial_text_arrow');
console.log(clic);
    for(let i  = 0; i < clic.length; i++){
        clic[i].addEventListener("click", (event) => {
            if(event.target.dataset.atr === "left"){
                if (l === -1872){
                    l = 0;
                } else {
                    l = l - 936;
                }
                slider.style.left = l + 'px'
            } else if(event.target.dataset.atr === "right"){
                if (l === 0){
                    l = -1871;
                } else {
                    l = l + 936;
                }
                slider.style.left = l + 'px'
            }
        })
    }
