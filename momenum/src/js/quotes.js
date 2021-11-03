const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

function getRandomInt() {
    return Math.floor(Math.random() * 50);
}

var randomQuote = getRandomInt();

async function getQuotes() {
    const quotes = `https://type.fit/api/quotes`;
    const res = await fetch(quotes);
    const data = await res.json();

    quote.textContent = `"${data[randomQuote].text}"`;
    author.textContent = data[randomQuote].author;
};

function getNextQuote() {
    if (randomQuote === 50) {
        randomQuote = 0;
    } else {
        randomQuote += 1;
    }
    getQuotes();
};

function changeQuotes() {
    changeQuote.addEventListener('click', getNextQuote);
};

export {
    getQuotes,
    changeQuotes
};
