 "use strict";

class CatalogItem {
    constructor(){
        this.items = []
    }

    fetchItems() {
        this.items = [
            {id: 1, title: 'Tomb Raider', version: '', href: '#', image: 'tombraider.jpg'},
            {id: 2, title: 'Ryse: Son Of Rome', version: '', href: '#', image: 'ryse.jpg'},
            {id: 3, title: 'World Of Warcraft:', version: 'Wrath Of The Linch King', href: '', image: 'wow.jpg'},
            {id: 4, title: 'battlefield 1', version: '', href: '#', image: 'battlefield1.jpg'},
            {id: 5, title: 'star wars:', version: 'Battlefront II', href: '#', image: 'star_wars.jpg'},
            {id: 6, title: 'battlefield 4', version: '', href: '#', image: 'battlefild4.jpg'},
            {id: 7, title: 'world of tanks', version: '', href: '#', image: 'world_of_tanks.jpg'},
            {id: 8, title: 'Assasin’s Creed: Rogue', version: '', href: 'Assasins_Creed_Rogue.html', image: 'assasin.jpg'},
            {id: 9, title: 'for honor', version: '', href: '#', image: 'for_honor.jpg'},
            {id: 10, title: 'world of warships', version: '', href: '#', image: 'world_of_warships.jpg'},
            {id: 11, title: 'call of duty:', version: 'Infinite Warface', href: '#', image: 'call_of_duty_infinite_warface.jpg'},
            {id: 12, title: 'MIDDLE-EARTH:', version: 'Shadow Of War', href: '#', image: 'MIDDLE-EARTH.jpg'},
            {id: 13, title: 'DISHONORED 2', version: '', href: '#', image: 'DISHONORED_2.jpg'},
            {id: 14, title: 'THIEF', version: '', href: '#', image: 'THIEF.jpg'},
            {id: 15, title: 'HITMAN', version: '', href: '#', image: 'HITMAN.jpg'},
        ];
        return this.items
    }

    render(){
        return this.items.map((item) => new HomePage
        (item.title, item.version, item.image, item.id, item.href)
            .render()).join('');
    }
}

class HomePage {
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
            <img src="image/${this.image}" alt="image"></a></div>
            <div class="catalog_list_item_text">
            <h3 class="catalog_list_item_text_h3">${this.title}</h3>
            <p class="catalog_list_item_text_p">${this.version}</p>
            <div class="button catalog_list_item_text_button flex bxbb">Buy</div></div></div>`
    }

}
 // if(item.id === 8 || item.id === 1 || item.id === 2 || item.id === 3){}
const items = new CatalogItem();
const catalogList = document.querySelector('.catalog_list');
items.fetchItems();
 catalogList.innerHTML = items.render();