const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1fdfa620c76d762af25be.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94741140620";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_01_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNixcbiAgICAgICAgODgsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyLFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM2LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICA3NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMixcbiAgICAgICAgODcsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICA4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTM3LFxuICAgICAgICA1NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgODMsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzLFxuICAgICAgICA3NixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTHg2cmN6ZzlmRjU3VHNSNmRZVDBpSTV3MTA3U29pdHJTbWJ6RDE4SnVLdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDcxNDc2NDkzN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQTMyMkQ1NDQyODJFNjE4MEY0QTFDQ0Y2MzkzQTE1NjZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzkwNDU4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxORzNiX0FCVHc2LU9wMl9Bdy1BdkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2NiZjlkZmEtMjFkYS00ZTdmLWE1YzMtZWUxOWFmODQ0MDcxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgNjYsXG4gICAgICAxMixcbiAgICAgIDI2LFxuICAgICAgMTM3LFxuICAgICAgMTM3LFxuICAgICAgMTcwLFxuICAgICAgMTE5LFxuICAgICAgMTcyLFxuICAgICAgNjUsXG4gICAgICAxODksXG4gICAgICAxNzYsXG4gICAgICA4OSxcbiAgICAgIDksXG4gICAgICAyMDAsXG4gICAgICAyMzUsXG4gICAgICA0NSxcbiAgICAgIDIxMyxcbiAgICAgIDg2LFxuICAgICAgMTg0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwNyxcbiAgICAgIDE5OCxcbiAgICAgIDEyOCxcbiAgICAgIDI0NixcbiAgICAgIDg2LFxuICAgICAgMjE1LFxuICAgICAgMTY0LFxuICAgICAgODcsXG4gICAgICAyMTUsXG4gICAgICAxMDcsXG4gICAgICAyMTAsXG4gICAgICAxNDUsXG4gICAgICAxNjgsXG4gICAgICAyNTIsXG4gICAgICAxNDIsXG4gICAgICA3OCxcbiAgICAgIDEyMSxcbiAgICAgIDQyLFxuICAgICAgMjcsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUUlpYQUVKQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3MTQ3NjQ5Mzc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlJhU0hfX0JvWVwiLFxuICAgIFwibGlkXCI6IFwiMjgwMDAxODcwMDUzMzk4OjlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSmpnck44Q0VQQ3E2YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnMkN1VXk5RHZaL2dkUTB3OEt0S1VLSTdIQUI5OFhnYUpHc2hhbm9LalFrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhIU0MwUDhtZ2ZsZ0xZMXlwaElaUlpzRmpGYitJY2xSOXhRWkN2akRTaUVxZTdDVFRMSEhlQzdQdXh1M3F6OWpibk1scUsvdkVwWkdjVmFoaEY1TEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZZMS9QN052M3dUeVlrUWw5dUo3L05qV0JzWnVmZHMxZjFHeUJ2QnRWa1B0SlBnWUtoUTM3aUFYTjNiQVEwMUgzelIzUzVWNDZtalhkT3g0YWhVU2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzE0NzY0OTM3OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEzOTA0NTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDQndcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUNCdy5qc29uIjogIntcImtleURhdGFcIjpcIjF5dHN1NDRCNlRzNmpxNjFVdmlPYkxpTzJ6Tm9oNGtTTjBHTGU4d0YzV1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzM2ODMzNTYwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzOTA0NTQxODZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "GHOST",
  botname : process.env.BOT_NAME  || "GHOST_MD",
  ownername:process.env.OWNER_NAME|| "GHOST",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "GHOST"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
