# Introduction

This is a design documentation for this project. This document covers the features that I will implement when building the project. To learn about the project, check the [README file](./README.md). This document covers the following:
1. a list of the different performable actions.
2. step-by-step process of performing different actions.
3. a list of packages that the project depends on.

# Possible actions

In order to organize the activities that this application performs, I created a list of possible actions that the users carry out in the appication. This method of organization may or may not already be established among developers. The following is the list of the possible user actions:
* creating a game.
* sending a text message.
* joining a game.
* making a move.
* resetting a game.

Aside from this basic actions, the following are the several features I want to add to this project:
* **Point system**: The game usually starts with 5 points for each player. A loss in a game looses a point, and a win in the game gains a point. The first player to 10 points wins.
* **JamStack-like**: This application needs to separate concerns on diffenent pages. This leads to faster application loading.
* **Number and letter labels**: The game labels the tic-tac-toe boxes so players can talk about boxes.
* **Resume**: Sometimes either of the players may be temporarily inactive, and they might want to continue playing. This feature allows the backend to delay some operations when either are inactive.
* **Inactivity timer**: When no activity has been recorded for 30 minutes, the game room will be erased from the server.

# Performing the possible actions

This section contains the step-by-step process of carrying out the different actions described in the [Possible actions](#possible-actions) section. To see all the actions be sure to check out [that](#possible-actions) section.

## Creating a game

The `index.html` page will be the first to be shown when the user visits the site. This page will have the following components:
* A big text saying "Create a tic-tac-toe game".
* An introductory text explaining how creating a game works.
* A button that says "Create a game".
* A link to the **Join a game** page.

When the user clicks on the **Create a game** button, the following happens:
1. the frontend creates a token.
2. the frontend saves the token to local storage.
3. the frontend creates board and turn data on the local storage.
4. the frontend sends the token to the backend.
5. the backend uses the token to create a game space (JavaScript object).
6. the backend creates a 2-space array for players for gameplay.
7. the backend creates another 2-space array for players for chatting.
8. the backend saves the game creator as player 1 (WebSocket instance).
9. the frontend disables game turn until player 2 has joined.

> **Note 1**: the token will be sent every time the frontend communicates with the backend.
>
> **Note 2**: the board and turn data is like a snapshot of the current state of the game board. They allow the players to resume to the current saved state of the game board.  

## Sending a text message

This application sends and receives message on the `messages.html` page. This page will be embedded into the `game.html` and `reset.html` page to in an iframe. The `message.html` page will have the following components:
* A floating text box at the bottom of the page.
* A button to send the text message.
* Text bubbles representing all sent messages.

When a player sends a message, the following happens:
1. the frontend trims and sends the message to the backend.
2. the backend routes the message to the second frontend.
3. the second frontend appends the message to the chat.
4. the frontend clears the message in the text box.


## Joining a game

The users can visit the `join-a-game.html` page by clicking the **Join a game** link on the `index.html` page. The `join-a-game.html` page will have the following components:
* A big text saying "Join a game".
* An introductory text explaining how joining a game works.
* A button that says "Join a game".
* A text box to paste the direct link.

The users can join a game in **two** ways:
* Pasting a link in the text.
* Opening a direct link.

When the user starts the process of joining a game, the frontend checks if the game room is already full. If the game room is full, the frontend redirects users to `game-full.html` page.

If the game isn't already full, the following happens:
1. the frontend saves the token as cookies.
2. the frontend redirects users to `game-board.html` file.
3. the frontend sends a request to add the joining player to the game room.
4. the backend saves the second player (WebSocket instance) to the game room.
5. the backend sends an "Player 2 has joined the game, you can play now" message to player 1.
6. the backend sends an data to activate player 1's turn to player 1.
7. the frontend disables player 2 turn.
8. the frontend saves current player turn and board data.

## Making a move

The `game.html` page allows the users to make a move within the application. This page will have the following components:
* A big text saying "Make a move ;)".
* A button to copy the game room link.
* A table to represent the game board.
* An iframe to handle player messaging.

When the user makes a move on board, the following happens:
1. the frontend adds the player character to the board.
2. the frontend saves the new board to the local storage.
3. the frontend disbles game play for current player.
4. the frontend updates turn on the local storage.
5. the frontend sends the player move data to the backend.
6. the backend receives move data and sends it to second player's frontend.
7. second player's frontend uses the data to update its frontend.
8. second player's turn is enabled.

## Resetting the game

The `reset.html` page allows the users to reset a game when the winner has been decided. The **reset** will have the following components:
* A big text saying which player won.
* A smaller text advising to confirm player availability for next game.
* A button to reset the game.
* An iframe for player messaging to confirm a game reset.

When the player clicks the **reset** button, the following happens:
* the frontend sends a reset-board event to the backend.
* the backend re-routes the reset-board event to the second frontend.
* the first frontend resets the board saved in local storage.
* the frontend disables the winner's turn and enables the loser's turn.

# Packages

This project contains a frontend and a backend. The frontend does not need any special package, but the backend does. The following is a list of the packages that this project uses:
* Express, for rest backend services.
* WebSocket, for more lightweight communication between frontend and backend.
* Cors, for access control of rest backend services.