let color = document.querySelector(`#color`);
let place = document.querySelector(`#place`);
let ritual = document.querySelector(`#ritual`);

const favColor = evt => {
    alert(`Green`);
};

color.addEventListener(`click`, favColor);

const favPlace = evt => {
    alert(`Home`);
};

place.addEventListener(`click`, favPlace);

const favRitual = evt => {
    alert(`Overnight oats every morning for breakfast`);
};

ritual.addEventListener(`click`, favRitual);