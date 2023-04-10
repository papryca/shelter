export class Slider {
    showCardSlider() {
        function pickItems(from, state, count) {
            let items = []
            for (let i = 0; i < count; i++) {
                let num = 0;
                do {
                    const randomIndex = Math.floor(Math.random() * from.length);
                    num = from[randomIndex];
                } while (
                    !((from.indexOf(num) !== -1) &&
                        (state.indexOf(num) === -1) &&
                        (items.indexOf(num) === -1))
                    )
                items.push(num);
            }
            return items;
        }

        const slides = document.querySelectorAll('.collection-card');
        const arrowRight = document.querySelector('.arrow_right');
        const arrowLeft = document.querySelector('.arrow_left');

        arrowRight.addEventListener('click', rightSlider);

        arrowLeft.addEventListener('click', leftSlider);
        let states = [];
        let prevstate = [];
        let flag = 0;

        function rightSlider() {
            moveSlider(1)
        }

        function leftSlider() {
            moveSlider(-1);
        }

        function moveSlider(move) {
            hideOldState();

            function moveForward() {
                const newState = pickItems([1, 2, 3, 4, 5, 6, 7, 8], states, 3)
                showState(newState);
                prevstate = states;
                states = newState;
                flag = move;
            }

            if (flag === 0) {
                moveForward();
            } else if (flag === move) {
                moveForward();
            } else {
                showState(prevstate);
                states = prevstate;
                prevstate = [];
                flag = 0;
            }
        }

        function hideOldState() {
            slides.forEach(slide => {
                slide.classList.add('collection-card_remove');
                setTimeout(function () {
                    slide.classList.add('collection-card_hidden')
                }, 500);
            });

        }

        function showState(st) {
            st.forEach(function (state, index) {
                setTimeout(function () {
                    const el = document.querySelector(`[data-pet-id="${state}"]`);
                    el.classList.remove('last-card');
                    el.classList.remove('second-card');
                    if (index === 2){
                        el.classList.add('last-card');
                    }
                    if (index === 1){
                        el.classList.add('second-card');
                    }

                    el.classList.remove('collection-card_hidden');
                    setTimeout(function () {
                        el.classList.remove('collection-card_remove');
                    }, 10);
                }, 500);
            });
        }

        (function reload() {
            const newState = pickItems([1, 2, 3, 4, 5, 6, 7, 8], states, 3)
            newState.forEach((state, index) => {
                const el = document.querySelector(`[data-pet-id="${state}"]`);
                el.classList.remove('last-card');
                el.classList.remove('second-card');
                if (index === 2){
                    el.classList.add('last-card');
                }
                if (index === 1){
                    el.classList.add('second-card');
                }
                el.classList.remove('collection-card_hidden');
                el.classList.remove('collection-card_remove');
            });
            states = newState;
        })();
    }
}