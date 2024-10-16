let balance = localStorage.getItem('balance') ? parseInt(localStorage.getItem('balance')) : 0;
let clickValue = localStorage.getItem('clickValue') ? parseInt(localStorage.getItem('clickValue')) : 1;

// Get elements from the DOM
const balanceElement = document.getElementById('balance');
const coin = document.getElementById('coin');
const buyBoost1 = document.getElementById('buy-boost-1');
const buyBoost2 = document.getElementById('buy-boost-2');
const coinEffect = document.getElementById('coin-effect');

// Function to update balance display
function updateBalance() {
    balanceElement.textContent = balance;
    localStorage.setItem('balance', balance);
}

// Function to update click value
function updateClickValue() {
    localStorage.setItem('clickValue', clickValue);
}

// Function to show floating coin effect
function showCoinEffect() {
    coinEffect.textContent = `+${clickValue}`;
    coinEffect.style.animation = 'float 1s forwards';
    setTimeout(() => {
        coinEffect.style.animation = 'none';
    }, 1000);
}

// Function to handle coin click
coin.addEventListener('click', () => {
    balance += clickValue;
    updateBalance();
    showCoinEffect();
});

// Function to handle boost purchases
function buyBoost(cost, increase) {
    if (balance >= cost) {
        balance -= cost;
        clickValue += increase;
        updateBalance();
        updateClickValue();
        document.body.style.backgroundColor = '#d1ffd6'; 
        setTimeout(() => {
            document.body.style.backgroundColor = '#f3f3f3';
        }, 500);
    } else {
        coin.classList.add('shake');
        setTimeout(() => {
            coin.classList.remove('shake');
        }, 500);
        alert('Not enough coins to buy boost!');
    }
}

// Boost buttons event listeners
buyBoost1.addEventListener('click', () => buyBoost(50, 1));
buyBoost2.addEventListener('click', () => buyBoost(100, 2));

// Load the initial balance and click value
updateBalance();
