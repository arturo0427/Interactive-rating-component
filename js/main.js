let numbeContainer = document.querySelector('.rating-state__number-buttons');

let rateNumber = document.querySelector('.thankYou-state__result--number');

let submit = document.querySelector('.rating-state__submit-button');

let ratingState = document.querySelector('.rating-state');
let thankYou = document.querySelector('.thankYou-state');

numbeContainer.addEventListener('click', (event) => {
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if (numberSelected > 0 & numberSelected < 6) {
        submit.addEventListener('click', (event) => {
            ratingState.style.display = 'none';
            thankYou.style.display = 'flex';
        });
    }
});
