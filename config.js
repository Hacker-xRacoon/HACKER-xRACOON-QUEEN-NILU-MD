/*
WHATSAPP BOT BY AKALPA 
WHATSAPP - 94772114781
*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// PUT YOUR SESSION ID HERE  ##Required 

global.SESSION_ID = 'QueenNilu;;;4rIkUTzJ#XyEXf44-xaeMQCm0mocYjkZ1PiBszgrQpSO93jvabuE' // PUT your session ID BY scan QR 

// databse URL  ##Required 
global.POSTGRESQL_URL = 'postgres://hacker_xracoon_user:wnbBZtXmNTK4ewL2OxTLgixBLX9VHp6h@dpg-ckl3qd3j89us73c48vvg-a.frankfurt-postgres.render.com/hacker_xracoon'



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '94772114781'

global.OWNER_NAME = 'HACKER-xRACOON_AKALPA'

global.TIMEZONE = 'Asia/Colombo' 

global.INBOX_BLOCK_MESSAGE = '' // Inboc Block Message

global.INBOX_BLOCK = 'true' // TO Inbox Block On put true

global.READ_MESSAGE = "true" 

global.OPENAI_API_KEY = "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" 

/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'
 
global.BOT_OFFLINE = false    //  Always Onlne -  | false offline -True

global.STICKER_NAME = '@AKALPA 🤹‍♂️' //sticker

global.FOOTER = 'HACKER-xRACOON 2023 '

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'HACKER-xRACOON  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/0cf2774b2d46c62d4f6b1.jpG' // Set Alive Logo link 

global.ALIVE_MESSAGE = 'default' // Set Alive Message

global.MAX_SIZE = '400' // Bot Uloading Max size 

global.ANTI_BAD = 'true' // Antibad (on = True , Off = False )

global.ANTI_BAD_ACTION = false

global.ANTI_LINK = 'false' //Anti Link (on = True , Off = False )

global.ANTI_BOTS = false

global.ONLY_GROUP = 'false' // Only group mode

global.GROUP_LINK = 'https://chat.whatsapp.com/GyErX1Lkr8JAFmO76AhVMh' // ur group link


/* 18 + Download Settings */

global.SEX_DL = 'false' // 18 + video dl

/* AUTO REPLY SETTINGS */

global.AUTO_STICKER = true

global.AUTO_REPLY = true

global.VOICE_REPLY = true


/* V card */

global.location = "Asia, colombo" //ur location

