<!-- PROJECT -->
# Lainavi

![Project Screenshot][project-screenshot]

Lainavi is a Discord bot that was developed with the purpose of simplifying tasks. It comes with custom commands for moderation, alerts, and gaming. Using the [Riot Games API](https://developer.riotgames.com/), the bot can access and display data about players' stats for League of Legends.



<!-- TECHNOLOGIES -->
## Technologies

* [discord.js](https://discord.js.org/#/)



<!-- INSTALLATION -->
## Installation

To set up a local copy of the project, follow these steps.

1. Clone the repository
   ```sh
   git clone https://github.com/buistvn/lainavi.git
   ```
2. Install packages
   ```sh
   npm install
   ```
3. Generate a token from [Discord Developer Portal](https://discord.com/developers/applications)
4. Generate an API key from [Riot Developer Portal](https://developer.riotgames.com/)
5. Create a `config.json` file in the root directory with the configuration variables
   ```sh
   {
       "prefix": "YOUR_PREFIX_GOES_HERE",
       "token": "YOUR_TOKEN_GOES_HERE",
       "key": "YOUR_API_KEY_GOES_HERE"
   }
   ```



<!-- USAGE -->
## Usage

To run the project, follow these steps.

1. Start up the bot
   ```sh
   node index.js
   ```
2. View the list of commands in the Discord server's text channel
   ```sh
   {prefix}help
   ```



<!-- LINKS & IMAGES -->
[project-screenshot]: /docs/lainavi.png
