<!-- ABOUT THE PROJECT -->
## Lainavi

![Project Screenshot][project-screenshot]

Lainavi is a multi-function Discord bot that was built for the purpose of simplifying tasks. It comes with custom commands for moderation, alerts, and gaming. Using the Riot Games API, the bot can access and display data about players' stats for League of Legends.

### Built With

* [discord.js](https://discord.js.org/#/)
* [LeagueJS](https://github.com/Colorfulstan/LeagueJS)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* config.json file in the main directory
  ```
  {
      "prefix": "PREFIX GOES HERE",
	   "token": "TOKEN GOES HERE",
	   "key": "KEY GOES HERE"
  }
  ```
* Choose a prefix (e.g., !, ?, -)
* Generate a token from [Discord Developer Portal](https://discord.com/developers/applications/)
* Generate a key from [Riot Developer Portal](https://developer.riotgames.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/buistvn/lainavi.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE -->
## Usage

* Start up the bot
  ```sh
  node index.js
  ```
* View the list of commands
  ```sh
  {prefix}help
  ```



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[project-screenshot]: images/Lainavi.png
