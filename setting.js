const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With SURYA-X Hear
SESSION_ID: process.env.SESSION_ID || "SURYA-X~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkZWOGlVQjZQRGt3dTM4dmdTWWlPc29NZnNLKy9FYktQTG9oYkIwa0cwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXlQL05Mb3kwblFVbHlCelpSa012SXBBcEU5cFJJQlRWZHpMZ2RWeHQyTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2S0VoRGlVOWxMbFpnbnJ1YStveWhoZ0JTWEt6cjU2ZUwzT0tjdllnUmt3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJneW1VNDF4TWFJaXJDMUN5U1ZvOFhFL051dGRzWHNSM2RsM25aUHcrc0dBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVOU2hUOTl4M1duQkNNNFFQdzc1U0pnN1ZBcms1bXRSUmp1dGdqSWdwVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRXclJTdHBWMTNmelEvTWthRFA5NDg1aFJuc2V3OUNuMU1YeU9EZEVpWEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0pmUlU2U2g3aWI2SHFFbm1QdTVUMG1waDV3czJrNzRwU2d2RURPaFNXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV2tOenQ1Ty9oWHk1ZWZNT2VTaU5mc3Jta2Q2SmJsUWs2SCt4WVN3QW9XTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVmRDVLOHdSZlhSbHFoMjQ2cnF3aGYzcnlkL2Zyb0JTYmorSnh2NEZnYmpnc1pKamxQbCsvZ250OU5UdXJDdXdUalhjeHJnUGJBSElZZW9JYWNsZkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6IkVObCtGYUx5SXF1NTBPaXNQbXlaTzE1MnJOM0VIZkY2MUZ2US9ERDRYTnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNDg3Mjk3NTk4NDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUMwRkYwODU2RDc4MTkzOEE5QzI1QzRFMzNCQzZGRkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NzU4MDI4NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg3Mjk3NTk4NDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDRDEyM0VBMkI0OTJBMURDN0NGMDAyNDdENjgyMjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NzU4MDI4NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg3Mjk3NTk4NDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM3NTlGQkFDRTcyNjVDOEFDMkNFNkRGNUE4NjFFMzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NzU4MDI4Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiNDg3Mjk3NTk4NDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUNDQjdEOEIzNDQ4MEM5RjMwREM5NEEzREUwNDY3NzYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc3NzU4MDI4N31dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoyLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiNDg3Mjk3NTk4NDY6MTlAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiI3MTc0ODIxNzIxNzE1MjoxOUBsaWQiLCJuYW1lIjoiQ0hPTSBDSE9NIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMRGFnL3dIRU9ueHpzOEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3b3NMbUhqK0M1RTUrL2xTbVB5R2hoSzRQb3dDZkVOZVV6Z2VERStFbXdRPSIsImFjY291bnRTaWduYXR1cmUiOiJSL01ka0VDYVYzbXNhTDdGK1o5VTdta01LRjVRd2E2U0lYWVliejd5Wm0wd3ZETEtlMi9zaTlYRzFPbDVZU1c1VVAzbVlDb2RqTGJOVEhPOWVXNGNDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiT3VIVENZMWhSVUQwNW9LN2dJbnN3WldSZFlGOWxBS2dUNHhDQjJzdjZBc1Q3QytOcGpSSjYwRTVtTmRuVmE1UG1RKzd6OUtadXhINHZ4eGVGV3RkQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI0ODcyOTc1OTg0NjoxOUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjS0xDNWg0L2d1Uk9mdjVVcGo4aG9ZU3VENk1BbnhEWGxNNEhneFBoSnNFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQU1JQ0FnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Nzc1ODAyODAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0FpIn0=",
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







