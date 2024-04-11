import {Modal} from "./Modal";

export class Paginator {

    constructor(pets, modalCallback) {
        this.pets = pets;
        this.data = [];
        this.page = 0;
        this.pageSize = 0;//8, 6, 3
        this.modalCallback = modalCallback
    }


    paginate() {

        let el = document.getElementById("paginator-links");

        if (!el) {
            return;
        }

        this.generatePages();
        this.resizer(window.outerWidth);

        let $this = this;
        window.addEventListener("resize", function (e) {
            let width = e.target.outerWidth;
            $this.resizer(width);
        });
    }

    resizer(width) {
        let oldPageSize = this.pageSize;


        this.pageSize = 3;
        if (width >= 768) {
            this.pageSize = 6;
        }
        if (width >= 1280) {
            this.pageSize = 8;
        }

        if (oldPageSize !== this.pageSize) {
            this.page = Math.floor((this.page * oldPageSize) / this.pageSize);
        }

        this.render();
    }

    renderLinks() {
        const pagesCount = this.data.length / this.pageSize;
        const numPage = parseInt(this.page);
        const firstActive = numPage > 0 ? 'button_bordered' : 'button_bordered-inactive';
        const lastActive = numPage < pagesCount - 1 ? 'button_bordered' : 'button_bordered-inactive';

        document.getElementById("paginator-links").innerHTML = `
        <div class="arrow">
            <button class="button ${firstActive} arrow_less-less" data-page="0">
                <span>&lt;&lt;</span>
            </button>
        </div>
        <div class="arrow">
            <button class="button ${firstActive} arrow_less" data-page="${parseInt(this.page) - 1}">
                <span>&lt;</span>
            </button>
        </div>
        <div class="arrow">
            <button class="button button_colored arrow_number" data-page="${parseInt(this.page)}">
                <span>${parseInt(this.page) + 1}</span>
            </button>
        </div>
        <div class="arrow">
            <button class="button ${lastActive} arrow_more" data-page="${parseInt(this.page) + 1}">
                <span>&gt;</span>
            </button>
        </div>
        <div class="arrow">
            <button class="button ${lastActive} arrow_more-more" data-page="${pagesCount - 1}">
                <span>&gt;&gt;</span>
            </button>
        </div>
        `;

        document.querySelectorAll('.arrow .button').forEach(btn => {
            let $this = this;
            btn.addEventListener('click', function (e) {
                $this.movePage(e.currentTarget.getAttribute('data-page'))
            })
        });
    }

    movePage(to) {
        this.page = to;
        this.render();
    }

    render() {
        this.renderPage(this.page);
        this.renderLinks();
    }

    renderPage(pageNum) {
        let pages = ''
        for (let i = 0; i < this.pageSize; i++) {
            pages += this.renderCard(this.data[pageNum * this.pageSize + i]);
        }

        document.getElementById("paginator-content").innerHTML = pages;

        document.querySelectorAll('.collection-card').forEach(card => {
            let callback = this.modalCallback
            card.addEventListener('click', function (event) {
                let id = event.currentTarget.getAttribute("data-pet-id");
                callback(id);
            });
        });
    }

    renderCard(pet) {
        return `
            <div class="collection-card" data-pet-id="${pet.id}">
                <div class="collection-card__photo">
                    <img class="collection-card__image" src="${pet.img}" alt="pet">
                </div>
                <p>${pet.name}</p>
                <div class=collection__button>
                    <button class="button button_bordered">Learn more</button>
                </div>
            </div>
        `;
    }

    generatePages() {
        for (let i = 0; i < 6; i++) {
            let page = this.shuffle(this.pets);
            this.data.push(...page);
        }
    }

    shuffle(array) {
        array = array.slice();
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }

        return array;
    }

}