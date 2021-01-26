# BetaNuBot

Discord Bot used by the Beta Nu chapter of the Alpha Omega Epsilon sorority to format announcement message as color-coded embedded messages in order to improve readability of announcements.
Currently this bot is designed only to work with specific roles. To format the bot for your own server, you would need to either hardcode the names of the roles you wish to color-code, or
develop your own method for extracting roles based on some chosen criteria.

## Getting Started

To install the bot, download a .zip file containing the contents of the BetaNuBot folder.

### Prerequisites

You may need to install node.js v12 or higher and discord.js in order to run the bot locally.
You will need to have a discord account in order to run and test the bot.
You will need to create your own discord bot app to use in your server(s).

### Installing

Installing prerequistes:

node.js v12 or higher

Either go to the website

```
https://nodejs.org/en/
```

or execute terminal commands

```
https://nodejs.org/en/download/package-manager/
```

to install discord.js

run the following in a terminal/command prompt

```
npm install discord.js
```

To run/test the bot, download Discord or use the browser based Discord application.

```
https://discord.com/
```

Creating a discord bot:

```
https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot
```


## Running the tests

To run tests on the bot, you will need to create a discord server and invite the bot to the server

This bot only have 2 functions:

One is a !ping command to check if it's online, which should produce `pong!` as a response.

The primary function is to delete the message sent by a user and produce a new embedded message using the text and links from the author's original message.

You will know that the bot is not working if you type anything except for !ping and your text is deleted.
You will also know that the bot is not working if your typed message is deleted but a new message is not produced.

You should test the bot for each and every role that you may have assigned to it.

## Deployment

The author uses Visual Studio Code to deploy the bot from the innate terminal.

You can also deploy the bot from any command prompt/terminal by navigating to the folder using 'cd' and deploy using

```
node .
```

To pause the pause, type `CTRL + C`.


## Built With

* [Visual Studio Code 2019](https://code.visualstudio.com/)
* [Discord.js](https://discordjs.guide/)

## Versioning

Versioning has not been recorded.

## Authors

* **Dinah Coe** - *Initial work* - [dinahcoe](https://github.com/dinahcoe)

