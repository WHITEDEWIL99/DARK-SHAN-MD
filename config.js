const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/kushansewmina1234/DARK-SHAN-MD'
global.location = 'srilanka'
global.gurl = 'https://instagram.com/naveeddogar_' // add your username
global.sudo = process.env.SUDO || '94742200945'
global.devs = '94772108460';
global.website = 'https://github.com/kushansewmina1234/DARK-SHAN-MD' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/8fbdcc26ca220f9718da2.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝗤𝗨𝗘𝗘𝗡-𝗛𝗘𝗟𝗔𝗡𝗞𝗔 ▎▎🧡🍃' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '_𝗜ᵀ𝚣 𝗠ᴇ 𝗦𝙸ˢˢ𝗢𝚁_' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? '_𝗜ᵀ𝚣 𝗠ᴇ 𝗦𝙸ˢˢ𝗢𝚁_' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? '_𝗜ᵀ𝚣 𝗠ᴇ 𝗦𝙸ˢˢ𝗢𝚁_' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'fuck' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '𝚆𝙴𝙻𝙲𝙾𝙼𝙴 𝚃𝙾 𝗤𝗨𝗘𝗘𝗡-𝗛𝗘𝗟𝗔𝗡𝗞𝗔 ▎▎🧡🍃 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃 𝙶𝚁𝙾𝚄𝙿

⚪𝚃𝚈𝙿𝙴 .𝙼𝙴𝙽𝚄  𝙰𝙽𝙳 𝙶𝙴𝚃 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙻𝙸𝚂𝚃
⚪𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 _𝗜ᵀ𝚣 𝗠ᴇ 𝗦𝙸ˢˢ𝗢𝚁_
⚪24/7 𝙾𝙽𝙻𝙸𝙽𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙱𝙾𝚃
⚪𝙽𝙾𝚃 𝚄𝚂𝙴𝙳 𝙱𝙰𝙳 𝙲𝙾𝙼𝙼𝙰𝙽𝙳𝚂 𝙰𝙽𝙳 𝙱𝙰𝙳 𝚆𝙾𝚁𝙳
⚪𝙳𝙾𝙽𝚃 𝙳𝚁𝙾𝙿 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝙽𝙺.𝚈𝙾𝚄 𝚆𝙴𝚁𝙴 𝚁𝙴𝙼𝙾𝚅𝙴𝙳 

🧡𝙿𝚁𝙴𝙵𝙸𝚇=.
🧡𝚆𝙾𝚁𝙺=24/7
🧡𝙾𝚆𝙽𝙴𝚁=_𝗜ᵀ𝚣 𝗠ᴇ 𝗦𝙸ˢˢ𝗢𝚁_
🧡𝙶𝚃𝙾𝚄𝙿=https://chat.whatsapp.com/K7bTUJHHsbr2RhWPPiJnhX
🧡𝚃𝙸𝙺𝚃𝙾𝙺=https://www.tiktok.com/@_itz_me_sahan_?_t=8kYpj7jeWji&_r=1
🧡𝚈𝙾𝚄𝚃𝚄𝙱𝙴=https://youtube.com/@nkmodder?si=Wb3uGL6Wl-8wV-7T

𝙶𝙴𝙽𝙰𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝗤𝗨𝗘𝗘𝗡-𝗛𝗘𝗟𝗔𝗡𝗞𝗔  𝗕𝗢𝗧 ▎▎🧡🍃
𝙿𝙾𝚆𝙴𝚁𝙳 𝙱𝚈 _𝗜ᵀ𝚣 𝗠ᴇ 𝗦𝙸ˢˢ𝗢𝚁_
' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-0.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| '_𝗜ᵀ𝚣 𝗠ᴇ 𝗦𝙸ˢˢ𝗢𝚁_',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
