# Introduction

This is a design documentation for this project. This document covers the features that I will implement when building the project. To learn about the project, check the [README file](./README.md). This document covers the following:
1. a list of the different performable actions.
2. description of possible actions.
3. a list of all things that the project depends on.

> **Note 1**: In the [description of possible actions](#description-of-possible-actions) section, each of the actions description has a hypothetical abstract implementation idea. You are free to use your own ideas to implement each action. The team needs to decide how the application connects players together before building the project.
>
> **Note 2**: You don't have to let the players know that they are either player one or two. It is easier for a player to see "player one" as their frontend and "player two" as the person playing with them. The second player also sees "player one" as their frontend and "player two" as the person playing with them. No need to identify them on the backend, only connect their games.

# Possible actions

In order to organize the activities that this application performs, I created a list of possible actions that the players carry out in the appication. This method of organization may or may not already be established among developers. The following is the list of the possible user actions:
* Entering a game.
* Making a move.
* Starting a new round.
* Ending a game.

Aside from this basic actions, the following are the several important side features:
* **Staking system**: Each player stakes 5 algo tokens when joining a game. A loss in a game looses a point, and a win in the game gains a point. The first player to gain 5 more tokens wins. Unless both parties agree to end the game.

# description of possible actions

This section contains the step-by-step process of carrying out the different actions described in the [Possible actions](#possible-actions) section. To see all the actions be sure to check out [that](#possible-actions) section.

## Entering a game

The `index` page will be the first to be shown when the user visits the site. This page will have the following components:
* A big text saying "Play an exciting game of tic-tac-toe".
* An introductory text explaining the game works.
* A button that says "Enter a live game".

> **Thoughts on implementation**: I want to make it that the application pairs players according to how they join. No one actually knows who they're playing with unless they're in certain conditions. Any time a player wants to enter a game, that player lets the backend know that they are available. And, the next player that wants to enter a game plays with that available player. Now, any player that wants to enter a game will also undergo the same process.
>
> **Note**: each player stakes 5 algo tokens as they are entering the game.

## Making a move

The `game` page allows the players to make a move within the application. This page will have the following components:
* A big text saying "Make a move ;)".
* A table to represent the game board.

> **Note**: We can implement this feature by remodelling the code in the [previous repo](./previous%20repo/) folder.

## Starting a new round

The `round end` page allows the players to start a new round when a player wins a round. This page will have the following components:
* A big text saying which player won.
* A "end game in draw" button.
* A "start new round" button.

Once a player clicks the **start new round** button, the app prompts second player to accept or decline their request. If the second player accepts, the game begins a new round. If the second player reject, nothing happens. This ensures that both players are ready for a new game.

## Ending a game

The `round end` page allows the players to start a new round when a player wins a round. This page will have the following components:
* A big text saying which player won.
* A "end game in draw" button.
* A "start new round" button.

Once a player clicks the **end game in draw** button, the app prompts second player to accept or decline their request. If the second player accepts, the game ends in a draw and all staked tokens minus the transaction fees get returned. If the second player reject, the app shows them that second player rejected their request.

# Packages

This project contains a React frontend and a Reach backend.