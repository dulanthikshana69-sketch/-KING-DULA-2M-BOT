const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/dulanthikshana69-sketch/-KING-DULA-2M-BOT/refs/heads/main/images/King%20Dula%2C%20gaming%20avatar%20king.png",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 KING DULA BOT 😈*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
