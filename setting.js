const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With SURYA-X Hear
SESSION_ID: process.env.SESSION_ID || "SURYA-X~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0tZelhuNGFPWUV3TlFEY1NocXZMYWpjWm94NWdTV2F4bmpyYXZLS3hIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2puSUNvOXBNbm1NT05kRVY3eCtNZmt1SWdwaW95NDhrWGhZYXFjTkFRYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQlRnL0pDSnlNOWhBZ0luSWM0aFVnZmxBU2lCei80NEpuY1VuWGE2SEh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCQ2Y3dzJQU2h4aXBuVGVTeVRhQmRreFVaVzM1cVNkNGU1c3h2TzFaMVVNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhPdVdQSnZPRVhDV05KeHRZdnVpTmJIQ01rTTZ5NjJocmhRVythYnZSVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNJekpVMHNiRGVmMjhQZlViVUhEYVJzTkYyOGVSL09neStabXZtYzRxeEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FsTGtKS1FkMlgvellLL2ZJTnd6UU9ENW1wTnJxY1laQUJleGpwVzYxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGpNZG85ZzcvLzl6bEdaT0hBRkRaMDdiVk04MHNveUJKbmZlT0x4VWFTdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpWN05jUGh3b0Ezb2wxVXlhNFZ1Nk9nV0VEdmVaOVNEQU5DSnpJK1dOTHQxNjh3cEN6TXlzYVUvcXA2Y05rR2t3T1M5SXJhSm14c2hqeEFUTDFmTURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoieGh4bWpwa0RPeWovTHFBbGRSU3Z1REhwWnlEbEJ3TC9DS1dYZldzT2tQVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI0ODcyOTc1OTg0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzYwNTZEM0RFQ0RDMjg2NUVFRjhFQTU3RDNGNzcxMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc3ODA3MjkyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0ODcyOTc1OTg0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzdBNjBGMDNDQjY1MzY4ODMwOTUzOEJFMTVFRUIyOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc3ODA3MjkyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0ODcyOTc1OTg0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQ0E1ODYxNDY0MTE4Qjc3MkNCQTg3QkREOUM1MjFERiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc3ODA3Mjk1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI0ODcyOTc1OTg0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzJCMDg4RkUwN0ZGOTM5QjY5RkRDRkJENEU1NUNDMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzc3ODA3Mjk2fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjIsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllVUFJBREVWIiwibWUiOnsiaWQiOiI0ODcyOTc1OTg0NjoyMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjcxNzQ4MjE3MjE3MTUyOjIxQGxpZCIsIm5hbWUiOiJDSE9NIENIT00ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xIYWcvd0hFS3JmM004R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Indvc0xtSGorQzVFNSsvbFNtUHlHaGhLNFBvd0NmRU5lVXpnZURFK0Vtd1E9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBYMUVvVUs2ME9xbnUzY25UV0pIK3B4bFFUbzVYaHNwcHJRNFRUMmRXSmpnVWtzREVwekFYNDJBbldvVnNGbVE5SWhqYzEzeGtNck9zczNFNGcxT0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJNZUZ3RDYzdGxCRGwrZTVVeHk4c3p6N3gvZ2Z5eCtOUGY2aTRmNkVCUGZIMUNnL3hseEs2ZDhuRHhMbXlrMmpLaGlwdTg0UGlYOEtkMlpmaWpWbXVBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjQ4NzI5NzU5ODQ2OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNLTEM1aDQvZ3VST2Z2NVVwajhob1lTdUQ2TUFueERYbE00SGd4UGhKc0UifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBTUlDQWdGIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NzgwNzI4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMcXUifQ==",
// SURYA-X Api Site Url
API_BASE: process.env.API_BASE || "https://api-key-surya.up.railway.app/",
// SURYA-X Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "suryaX_9f3kL2pQ7z",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SURYA-X 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SURYA-X",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SURYA-X",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "917797099719",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "DARK SURYA",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "917797099719",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







