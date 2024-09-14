# Eagle Coin Clicker Game

Eagle Coin is a simple clicker game built with HTML, CSS, and JavaScript. The user can click on a coin to earn points and use those points to purchase boosts that increase the number of points earned per click. The game features animations for a more interactive experience.

## PLease note that this app was done just for fun and based on the current tapping trend

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [How to Play](#how-to-play)
- [File Structure](#file-structure)
- [Customization](#customization)

## Features
- **Coin Clicking**: Click the coin to earn points. The balance is displayed at the top.
- **Boost Purchase**: Use points to buy boosts that increase the number of points earned per click.
- **Animations**: Includes animations for the coin click, balance updates, and the main heading ("Eagle Coin").
- **Interactive UI**: Features scaling effects, floating text, background color transitions, and error shake animations.

## Technologies Used
- **HTML**: Provides the basic structure of the webpage.
- **CSS**: Used for styling and animations.
- **JavaScript**: Handles the game logic, interactions, and dynamic updates.

## Setup
1. **Clone or Download** this repository.
2. Place an image named `coin.png` in the same directory as the HTML file to represent the coin. You can use any image you like.
3. Ensure the file structure looks like this:
    ```
    - index.html
    - styles.css
    - script.js
    - coin.png
    ```
4. Open `index.html` in a web browser to start playing the game.

## How to Play
1. **Click the Coin**: Click on the coin in the middle of the page to earn points. The points will be displayed at the top.
2. **Buy Boosts**: Once you have at least 50 points, click the "Buy Boost" button to increase the points gained per click. Each boost increases the click value by 1.
3. **Insufficient Points**: If you try to buy a boost without enough points, the coin will shake, and an alert will notify you.

## File Structure
- **index.html**: Contains the structure of the webpage, including the main heading, coin image, balance display, and boost button.
- **styles.css**: Styles the webpage and defines animations for the coin, main heading, and other UI elements.
- **script.js**: Contains the game logic for clicking the coin, updating the balance, and handling boosts.
- **coin.png**: An image file representing the coin. Place any coin image you prefer in the root directory.

## Customization
- **Coin Image**: Replace `coin.png` with any other image of your choice.
- **Animations**: Modify the CSS in `styles.css` to customize the animations for clicking, floating text, and background changes.
- **Boost Cost**: Change the boost cost in `script.js` (default is 50 coins).

Enjoy building and customizing your own clicker game!
