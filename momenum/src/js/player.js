const songList = document.querySelector('.play-list');
const playButton = document.querySelector('.play');
const prevButton = document.querySelector('.play-prev');
const nextButton = document.querySelector('.play-next');

const playList = [
    {
        title: 'Aqua Caelestis',
        src: '../assets/sounds/Aqua Caelestis.mp3',
    },
    {
        title: 'Ennio Morricone',
        src: '../assets/sounds/Ennio Morricone.mp3',
    },
    {
        title: 'River Flows In You',
        src: '../assets/sounds/River Flows In You.mp3',
    },
    {
        title: 'Summer Wind',
        src: '../assets/sounds/Summer Wind.mp3',
    }
];

const audio = new Audio();
let isPlay = false;
let songNum = 0;

function getPlayList() {
    playList.forEach((element) => {
        const li = document.createElement('li');
        li.classList.add('play-item');
        li.textContent = element.title;
        songList.append(li);
    })
};

function playAudio() {
    audio.src = playList[songNum].src;
    audio.currentTime = 0;
    audio.play();
};

function pauseAudio() {
    audio.pause();
};

function playOrPause() {
    if (isPlay === false) {
        playAudio();
        isPlay = true;
        playButton.classList.add('pause');
    } else {
        pauseAudio();
        isPlay = false;
        playButton.classList.remove('pause');
    }
};

function playPrev() {
    if (songNum === 0) {
        songNum = playList.length - 1;
    } else {
        songNum -= 1;
    }
    playOrPause();
};

function playNext() {
    if (songNum === (playList.length - 1)) {
        songNum = 0;
    } else {
        songNum += 1;
    }
    playOrPause();
};

function getPlayButton() {
    playButton.addEventListener('click', playOrPause);
};

function getPrevButton() {
    prevButton.addEventListener('click', playPrev);
};

function getNextButton() {
    nextButton.addEventListener('click', playNext);
};

export {
    getPlayList,
    getPlayButton,
    getPrevButton,
    getNextButton
};
