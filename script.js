let balance = 0;
let clickValue = 1;

// Get elements from the DOM
const balanceElement = document.getElementById('balance');
const coin = document.getElementById('coin');
const buyBoostButton = document.getElementById('buy-boost');
const coinEffect = document.getElementById('coin-effect');

// Function to update balance display
function updateBalance() {
    balanceElement.textContent = balance;
}

// Function to show floating coin effect
function showCoinEffect() {
    coinEffect.textContent = `+${clickValue}`;
    coinEffect.style.animation = 'float 1s forwards';
    setTimeout(() => {
        coinEffect.style.animation = 'none'; // Reset the animation
    }, 1000);
}

// Function to handle coin click
coin.addEventListener('click', () => {
    balance += clickValue;
    updateBalance();
    showCoinEffect();
});

// Function to handle boost purchase
buyBoostButton.addEventListener('click', () => {
    if (balance >= 50) {
        balance -= 50;
        clickValue += 1;
        updateBalance();
        document.body.style.backgroundColor = '#d1ffd6'; // Change background color on successful boost
        setTimeout(() => {
            document.body.style.backgroundColor = '#f3f3f3'; // Reset background color
        }, 500);
    } else {
        coin.classList.add('shake');
        setTimeout(() => {
            coin.classList.remove('shake'); // Remove shake effect after animation
        }, 500);
        alert('Not enough coins to buy boost!');
    }
});
