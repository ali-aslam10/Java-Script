# 🎮 Tic Tac Toe Game

This is a simple **Tic Tac Toe** game built using HTML, CSS, and JavaScript. Players take turns marking spaces in a 3x3 grid with "O" or "X". The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.

## Features
- Two-player mode (Player X and Player O)
- Reset, New Game, and Review Game functionality
- Displays the winner after a player wins
- Prevents further moves after a win
- Visually distinct styles for "O" and "X"

## How to Play
1. Clone the repository or download the zip file.
2. Open the `index.html` file in your browser.
3. Click on any box to start the game.
4. Player O starts first, followed by Player X. 
5. Take turns until one player wins or the game ends in a tie.
6. Use the following buttons:
   - **New Game**: Start a new game.
   - **Reset Game**: Reset the current game.
   - **Review Last Game**: Review last game grid.

## JavaScript Logic Overview

- **winPatterns**: Defines all the winning combinations of the grid (horizontal, vertical, diagonal).
- **Boxes**: Each grid box listens for a click event to place either "O" or "X".
- **determineWinner()**: Checks the current state of the grid for a winner after each move.
- **showWinner()**: Displays a message with the winning player.
- **reset_game_btn**, **new_game_btn**, **review_game_btn**: Buttons to control the game flow.

##

# ✂️ Rock Paper Scissors Game

This is a simple **Rock Paper Scissors** game built using HTML, CSS, and JavaScript. In this game, the user plays against the computer by selecting Rock, Paper, or Scissors, and the computer randomly selects its choice. The game continues for as long as the user wishes to play.

## Features
- User vs Computer gameplay
- Dynamic scoring for both the user and the computer
- Displays game outcomes (Win, Lose, Draw) with visual feedback
- Easy-to-use interface with clickable choices for the user

## How to Play
1. Clone the repository or download the zip file.
2. Open the `index.html` file in your browser.
3. Select one of the following options:
   - **Rock**
   - **Paper**
   - **Scissors**
4. The computer will randomly choose Rock, Paper, or Scissors.
5. The result will be displayed:
   - You win, lose, or draw based on the rules of Rock Paper Scissors.
   - The score will be updated accordingly.

## Game Rules
- **Rock** beats Scissors
- **Scissors** beats Paper
- **Paper** beats Rock
- If both choices are the same, the game is a draw.

## JavaScript Logic Overview

- **choices**: Represents the available options for the user to click (Rock, Paper, Scissors).
- **userScore**, **compScore**: Keeps track of the scores for the user and the computer.
- **PlayGame(userChoice)**: Handles the game logic, compares user choice with computer choice, and determines the winner.
- **showWinner(userWin, userChoice, compChoice)**: Displays the result (win/lose) and updates the score.
##

# 💱 Currency Converter

This is a simple **Currency Converter** web application built using JavaScript, HTML, and CSS. It uses a currency conversion API to fetch live exchange rates and allows users to convert between different currencies.

## Features
- Convert currencies from one to another using live exchange rates.
- Dropdown lists for selecting currencies with default options set to USD (from) and PKR (to).
- Displays currency exchange rates with corresponding country flags.
- Automatically converts when the page loads or when the user clicks the "Convert" button.

## How to Use
1. Clone the repository or download the zip file.
2. Open the `index.html` file in your browser.
3. Select the currencies you want to convert from and to.
4. Enter the amount in the input field.
5. Click the **Convert** button to see the result.

## JavaScript Logic Overview

- **BASE_URL**: The base URL for fetching the latest currency exchange rates from the [@fawazahmed0/currency-api](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies).
- **fetchData()**: Fetches the conversion rate from the API based on the selected currencies.
- **convert()**: Multiplies the entered amount by the fetched conversion rate and displays the result.
- **updateFlag()**: Updates the country flag next to the currency code based on the selected currency.

## Contribution

Feel free to submit issues or pull requests if you find any bugs or want to improve the project.
