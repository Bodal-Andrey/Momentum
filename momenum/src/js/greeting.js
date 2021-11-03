const greeting = document.querySelector('.greeting');

function showGreeting() {
    const hours = new Date().getHours();

    if (hours < 6) {
        greeting.textContent = 'Good night';
    } else if (hours < 12) {
        greeting.textContent = 'Good morhing';
    } else if (hours < 18) {
        greeting.textContent = 'Good afternoon';
    } else {
        greeting.textContent = 'Good evening';
    }
    setTimeout(showGreeting, 1000);
};

export default showGreeting;
