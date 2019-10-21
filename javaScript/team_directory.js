"use strict";

class TeamList {
    constructor(){
        this.members = []
    }

    fetchItems() {
        this.members = [
            {id:'mary jane', firstName: 'Mary', lastName: 'Jane', position: 'Vestibulum', facebooc: '#', twitter: '#', rssFed: '#', vc: '#', photo: 'mary_jane.jpg'},
            {id:'peter parker', firstName: 'Peter', lastName: 'Parker', position: 'Ves tibulum', facebooc: '#', twitter: '#', rssFed: '#', vc: '#', photo: 'peter_parker.jpg'},
            {id:'john watson', firstName: 'John', lastName: 'Watson', position: 'Vestibulum', facebooc: '#', twitter: '#', rssFed: '#', vc: '#', photo: 'john_watson.jpg'},
            {id:'steven wilson', firstName: 'Steven', lastName: 'Wilson', position: 'Vestibulum', facebooc: '#', twitter: '#', rssFed: '#', vc: '#', photo: 'steven_wilson.jpg'}
        ];
        return this.members
    }

    render(){
        return this.members.map((item) => new OutMembers(item.id, item.firstName,
            item.lastName, item.position, item.facebooc, item.twitter,
            item.rssFed,  item.vc,  item.photo).render()).join('');
    }
}
class OutMembers{
    constructor(id, firstName, lastName, position, facebooc, twitter, rssFed, vc, photo,){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.facebooc = facebooc;
        this.twitter = twitter;
        this.rssFed = rssFed;
        this.vc = vc;
        this.photo = photo;
    }
    render() {
        return `<div data-art="${this.id}" class="our_team_list_member bxbb">
            <div class="our_team_list_member_image"><a class="flex" href="#"><img src="image/${this.photo}" 
            alt="photo"></a></div>
            <div class="our_team_list_member_description"><h3 class="our_team_list_member_description_name">
            <span class="our_team_list_member_description_name_first">${this.firstName}</span>
            <span class="our_team_list_member_description_name_last">${this.lastName}</span></h3>
            <p class="our_team_list_member_description_position">${this.position}</p>
            <div class="our_team_list_member_description_social flex bxbb">
            <a class="our_team_list_member_description_social_square flex" href="${this.facebooc}"><i class="fab fa-facebook-f"></i></a>
            <a class="our_team_list_member_description_social_square flex" href="${this.twitter}"><i class="fab fa-twitter"></i></a>
            <a class="our_team_list_member_description_social_square flex" href="${this.rssFed}"><i class="fas fa-rss"></i></a>
            <a class="our_team_list_member_description_social_square flex" href="${this.vc}"><i class="fab fa-vk"></i></a>
            </div></div></div>`
    }

}

const members = new TeamList();
const membersList = document.querySelector('.our_team_list');
members.fetchItems();
membersList.innerHTML = members.render();