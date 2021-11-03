const body = document.querySelector('body');
const greeting = document.querySelector('.greeting');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

const IMAGES = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];

function getRandomInt() {
    return Math.floor(Math.random() * 19);
}

var imgNum = getRandomInt();

function setBg() {
    const img = new Image();

    if (greeting.innerHTML === 'Good night') {
        img.src = `https://raw.githubusercontent.com/Bodal-Andrey/stage1-tasks/assets/images/night/${IMAGES[imgNum]}`;
        img.onload = () => {
            body.style.backgroundImage = `url('https://raw.githubusercontent.com/Bodal-Andrey/stage1-tasks/assets/images/night/${IMAGES[imgNum]}')`;
        };
    } else if (greeting.innerHTML === 'Good morning') {
        img.src = `https://raw.githubusercontent.com/Bodal-Andrey/stage1-tasks/assets/images/morning/${IMAGES[imgNum]}`;
        img.onload = () => {
            body.style.backgroundImage = `url('https://raw.githubusercontent.com/Bodal-Andrey/stage1-tasks/assets/images/morning/${IMAGES[imgNum]}')`;
        };
    } else if (greeting.innerHTML === 'Good afternoon') {
        img.src = `https://raw.githubusercontent.com/Bodal-Andrey/stage1-tasks/assets/images/afternoon/${IMAGES[imgNum]}`;
        img.onload = () => {
            body.style.backgroundImage = `url('https://raw.githubusercontent.com/Bodal-Andrey/stage1-tasks/assets/images/afternoon/${IMAGES[imgNum]}')`;
        };
    } else {
        img.src = `https://raw.githubusercontent.com/Bodal-Andrey/stage1-tasks/assets/images/evening/${IMAGES[imgNum]}`;
        img.onload = () => {
            body.style.backgroundImage = `url('https://raw.githubusercontent.com/Bodal-Andrey/stage1-tasks/assets/images/evening/${IMAGES[imgNum]}')`;
        };
    }
};

function getSlidePrev() {
    if (imgNum === 0) {
        imgNum = 19;
    } else {
        imgNum -= 1;
    }
    setBg();
};

function getSlideNext() {
    if (imgNum === 19) {
        imgNum = 0;
    } else {
        imgNum += 1;
    }
    setBg();
};

function getSlide() {
    slidePrev.addEventListener('click', getSlidePrev);
    slideNext.addEventListener('click', getSlideNext);
}

export {
    setBg,
    getSlide
};
