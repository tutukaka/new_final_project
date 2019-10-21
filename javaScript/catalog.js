 "use strict";

class CatalogItem {
    constructor(){
        this.items = []
    }

    fetchItems() {
        this.items = [
            {id: 1,name: 'Assasin’s Creed: Rogue',image: 'assasin.jpg'},
            {id: 2,name: 'Tomb Raider',image: 'tombraider.jpg'},
            {id: 3,name: 'Ryse: Son Of Rome',image: 'ryse.jpg'},
            {id: 4,name: 'World Of Warcraft:<br>Wrath Of The Linch King',image: 'wow.jpg'},
            {id: 5,name: 'Assasin’s Creed: Rogue',image: 'assasin.jpg'},
            {id: 6,name: 'Tomb Raider',image: 'tombraider.jpg'},
            {id: 7,name: 'Ryse: Son Of Rome',image: 'ryse.jpg'},
            {id: 8,name: 'World Of Warcraft:<br>Wrath Of The Linch King',image: 'wow.jpg'},

        ];
        return this.items
    }

    render(){
        return this.items.map((item) => new NewItem(item.name, item.image, item.id)
            .render()).join('');
    }
}
class NewItem {
    constructor(name, image, id){
        this.name = name;
        this.image = image;
        this.id = id;
    }
    render() {
        return `<div data-art="${this.id}" class="catalog_list_item bxbb">
            <div class="catalog_list_image"><a class="flex" href="#"><img src="image/${this.image}" 
            alt="image"></a></div>
            <div class="catalog_list_item_text"><h3 class="catalog_list_item_text_h3">${this.name}</h3>
            <div class="button catalog_list_item_text_button flex bxbb">Buy</div></div></div>`
    }

}

const items = new CatalogItem();
const catalogList = document.querySelector('.catalog_list');
items.fetchItems();
 catalogList.innerHTML = items.render();