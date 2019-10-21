"use strict";

let testimonial = -936;
const sliderTestimonial = document.querySelector('.testimonial_text_description_move');
document.querySelector('.testimonial_text').addEventListener('click',
    (event) => {
        let textWidth = 936; // Width - <div class="testimonial_text_description_block">
        if (event.target.dataset.atr === 'left'){
            if (testimonial === -(textWidth*2)){
                    testimonial = 0;
                } else {
                    testimonial = testimonial - textWidth;
                }
            sliderTestimonial.style.left = testimonial + 'px'
        } else if(event.target.dataset.atr === "right"){
                if (testimonial === 0){
                    testimonial = -(textWidth*2);
                } else {
                    testimonial = testimonial + textWidth;
                }
            sliderTestimonial.style.left = testimonial + 'px'
            }
});

let tasksGallery = -380;
const sliderTasksGallery = document.querySelector('.tasks_block_events_gallery_slider');
document.querySelector('.tasks_block_events_header_arrow').addEventListener('click',
    (event) => {
        let imgWidth = 190; // Width - <div class="testimonial_text_description_block">
        if (event.target.dataset.atr === 'left'){
            if (tasksGallery === -(imgWidth*4)){
                tasksGallery = 0;
            } else {
                tasksGallery = tasksGallery - imgWidth;
            }
            sliderTasksGallery.style.left = tasksGallery + 'px'
        } else if(event.target.dataset.atr === "right"){
            if (tasksGallery === 0){
                tasksGallery = -(imgWidth*4);
            } else {
                tasksGallery = tasksGallery + imgWidth;
            }
            sliderTasksGallery.style.left = tasksGallery + 'px'
        }
    });
