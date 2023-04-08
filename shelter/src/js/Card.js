export class Card {
    constructor({id, name, img, type, breed, description, age, inoculations, diseases, parasites}) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
        this.overlay = '';
    }

    generateCard() {
        let template = ''
        let article = document.createElement('div');
        article.className = "collection-card collection-card_modal";
        article.setAttribute('data-card-id', this.id);

        template += `<div class="collection-card__photo-modal">`
        this.img &&
        (template += `<img class="collection-card__image-modal" src=${this.img} alt="pet">`)
        template += `</div>`
        template +=`<div class="collection-card__content">`
        this.name &&
        (template += `<h3>${this.name}</h3>`)

        this.type && this.breed &&
        (template += `<h4>${this.type} - ${this.breed}</h4>`)


        this.description &&
        (template += `<h5 class = "collection-card__content-pet">${this.description}</h5>`)

        template += `<ul class="collection-card__description">`
        template += `<li class="collection-card__description-age">`
        this.age &&
        (template += `<h5><strong>Age:</strong> ${this.age}</h5>`)
        template += `</li>`
        template += `<li class="collection-card__description-inoculations">`
        this.inoculations &&
        (template += `<h5><strong>Inoculations:</strong> ${this.inoculations}</h5>`)
        template += `</li>`
        template += `<li class="collection-card__description-diseases">`
        this.diseases &&
        (template += `<h5><strong>Diseases:</strong> ${this.diseases}</h5>`)
        template += `</li>`
        template += `<li class="collection-card__description-parasites">`
        this.diseases &&
        (template += `<h5><strong>Parasites:</strong> ${this.diseases}</h5>`)
        template += `</li>`
        template += `</ul>`
        template += `</div>`
        article.innerHTML = template;

        return article;
    }
}