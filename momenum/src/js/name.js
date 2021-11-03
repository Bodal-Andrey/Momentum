const user = document.querySelector('.name');

function setLocalStorage() {
    localStorage.setItem('user', user.value);
};

function getLocalStorage() {
    if (localStorage.getItem('user')) {
        user.value = localStorage.getItem('user');
    }
};

function setName() {
    window.addEventListener('beforeunload', setLocalStorage);
};

function getName() {
    window.addEventListener('load', getLocalStorage);
};

export {
    setName,
    getName
};
