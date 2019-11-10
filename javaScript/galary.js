"use strict";

const _img = document.getElementsByClassName('product_description_gallery_mini_preview');
document.querySelector('.product_description_gallery_mini')
    .addEventListener('click', (event) => {
        if (event.target.className === 'product_description_gallery_mini_preview') {
            for (let i = 0; i < _img.length; i++) {
                if (_img[i].classList.contains('product_description_gallery_mini_preview_active'))
                    _img[i].classList.remove('product_description_gallery_mini_preview_active')
            }
            event.target.classList
                .toggle('product_description_gallery_mini_preview_active', true);
        }
});

const maxImage = document.querySelector('.product_description_gallery_max');
document.querySelector('.product_description_gallery_mini')
    .addEventListener('click', (event) => {
        if (event.target.className === 'product_description_gallery_mini_selector_fullsize') {
            maxImage.style.display = 'block';
            maxImage.children[4].src = event.target.dataset.full_image_url;
        }
});

document.querySelector('.product_description_gallery_max__close')
    .addEventListener('click',(event) => {
        event.path[1].style.display = 'none'
    });



