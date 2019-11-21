 "use strict";

class CatalogItem {
    constructor(){
        this.items = [];
        this.out = [];
    }

    fetchItems(a){
        const max = this.items.length;
        const key = [];
        for(let i = 0; i < a;) {
             let num = parseInt(Math.random() * max + 1);
                if (i === 0){
                    key.push(num);
                    this.out.push(this.items[num - 1]);
                    i++
                } else if(key.every(elem => elem !== num)) {
                    key.push(num);
                    this.out.push(this.items[num - 1]);
                    i++;
                }
        }
    }

    fetchItemsList() {
         return fetch('https://raw.githubusercontent.com/tutukaka/new_final_project/master/catalog.json')
        .then(response => response.json())
            .catch(error => {console.log(`${error} вот`)})
        .then((items) => {
            this.items = items.goods;
        })
    }

    render(name = BasePage){
        return this.out.map((item) => new name(item.title, item.version, item.image, item.id, item.href)
            .render()).join('');
    }
}

class BasePage {
    constructor(title, version, image, id, href){
        this.title = title;
        this.version = version;
        this.image = image;
        this.id = id;
        this.href = href;
    }

    render() {
        return `<div data-art="${this.id}" class="catalog_list_item bxbb">
            <div class="catalog_list_image"><a class="flex" href="${this.href}">
            <img class="catalog_list_image_img" src="image/${this.image}" alt="image"></a></div>
            <div class="catalog_list_item_text">
            <h3 class="catalog_list_item_text_h3">${this.title}</h3>
            <p class="catalog_list_item_text_p">${this.version}</p>
            <div class="button catalog_list_item_text_button flex bxbb">Buy</div></div></div>`
    }
}
 class ProductPage {
     constructor(title, version, image, id, href){
         this.title = title;
         this.version = version;
         this.image = image;
         this.id = id;
         this.href = href;
     }

     render() {
         return `<div data-art="${this.id}" class="catalog_list_item catalog_product_page_list_item bxbb">
            <div class="catalog_list_image"><a class="flex" href="${this.href}">
            <img class="catalog_list_image_img" src="image/${this.image}" alt="image"></a></div>
            <div class="catalog_list_item_text catalog_list_item_text_product_page">
            <h3 class="catalog_list_item_text_h3">${this.title}</h3>
            <p class="catalog_list_item_text_p">${this.version}</p>
            <div class="button catalog_list_item_text_button flex bxbb">Buy</div></div></div>`
     }
 }

const items = new CatalogItem();
