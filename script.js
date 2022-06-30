const settingsBtn = document.querySelector('#setting-btn');
const settings = document.querySelector('#settings');
const difficultySelect = document.querySelector('#difficulty');
const word = document.querySelector('#word');
const inputText = document.querySelector('#input-text');
const scoreEl = document.querySelector('#score');
const timeEl = document.querySelector('#time');
const endGameEl = document.querySelector('#end-game-container');


const words = [
    'good',
    'south',
    'independent',
    'steering',
    'gold',
    'home',
    'artificial',
    'intelligence',
    'nine',
    'fame',
    'dismiss',
    'drop',
    'caring',
    'sing',
    'utensil',
    'airplane',
    'pilot',
    'basket',
    'juice',
    'ukraine',
    'captain',
    'this',
    'game',
    'is',
    'difficult',
    'south',
    'independent',
    'steering',
    'gold',
    'home',
    'artificial',
    'intelligence',
    'nine',
    'fame',
    'dismiss',
    'drop',
    'caring',
    'sing',
    'utensil',
    'airplane',
    'pilot',
    'basket',
    'juice',
    'ukraine',
    'captain',
    'this',
    'game',
    'is',
    'difficult',
];

let data,
    randomWord,
    score = 0,
    difficulty,
    time = 11;

// API call and generates Random numbers of 5000 words
randomWordsFunc = async() => {
    const response = await fetch(
        'https://random-word-api.herokuapp.com/word?number=5000'
    );
    data = await response.json();
    if (data) {
        addWordToDOM(data[Math.floor(Math.random() * 5000)]);
    }
};

randomWordsFunc();

//Focus on Input Field on load
inputText.focus();

// Function To Update Score
function updateScore() {
    score += 2;
    scoreEl.innerHTML = score;
}

//Timing Function
function updateTime() {
    time--;
    timeEl.innerHTML = `${time}s`;

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

