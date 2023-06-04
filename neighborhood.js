let restaurant = document.querySelector(`#restaurant`);

let restArr = [`Torque Grill`, `American Revelry`, `The Rim`];

const randomRest = evt => {
    let random = Math.floor(Math.random() * restArr.length)
    alert(restArr[random]);
};

restaurant.addEventListener(`click`, randomRest);