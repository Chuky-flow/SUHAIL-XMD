const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_06_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3MixcbiAgICAgICAgMjA1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDc3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQzLFxuICAgICAgICA5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5NyxcbiAgICAgICAgMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDIsXG4gICAgICAgIDY4LFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODksXG4gICAgICAgIDUwLFxuICAgICAgICA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyLFxuICAgICAgICA1MixcbiAgICAgICAgNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzLFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTczLFxuICAgICAgICA3LFxuICAgICAgICA0NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NixcbiAgICAgICAgNzYsXG4gICAgICAgIDIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYzLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEwLFxuICAgICAgICA3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgNzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjQwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODksXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDQxLFxuICAgICAgICA0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDkxLFxuICAgICAgICA3OCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTksXG4gICAgICAgIDI5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQxLFxuICAgICAgICA4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWnJPUHY5NnBNV3VVSktnSDlxOG9qOU0yZUhzcTh3OWlNdnVIbzYyT1lqcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxODI5MzUyOTMyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRTAwQTE4QUQzQkE4N0JGMTcwNUEzNDFFNzNBQ0YyNDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0NzE0MzgyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjFJNWZ6aXplUjY2NjFFTURlLXBnSndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTE4MmZiNjItMDg5NC00ZWQzLWJmNjAtZjEzODJmYzg1YmFmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM4LFxuICAgICAgMjQ5LFxuICAgICAgMTQzLFxuICAgICAgNjgsXG4gICAgICAyNDAsXG4gICAgICAxMjcsXG4gICAgICAxNzgsXG4gICAgICAxNjMsXG4gICAgICAxLFxuICAgICAgMTEzLFxuICAgICAgMjAsXG4gICAgICAxODcsXG4gICAgICA3OCxcbiAgICAgIDQ5LFxuICAgICAgMTU4LFxuICAgICAgOTQsXG4gICAgICA4LFxuICAgICAgMjM4LFxuICAgICAgNTYsXG4gICAgICAxODZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICA2LFxuICAgICAgOTEsXG4gICAgICAyMzksXG4gICAgICA3NSxcbiAgICAgIDU2LFxuICAgICAgMTY4LFxuICAgICAgMTQsXG4gICAgICAxMjQsXG4gICAgICAxNjQsXG4gICAgICAxOTYsXG4gICAgICAxMzIsXG4gICAgICA5MCxcbiAgICAgIDg2LFxuICAgICAgNTQsXG4gICAgICAxOTcsXG4gICAgICAxNDQsXG4gICAgICA3MyxcbiAgICAgIDE2NCxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1RlFHSkpEU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTgyOTM1MjkzMjU6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImZsb3djaHVreTA5NVwiLFxuICAgIFwibGlkXCI6IFwiMjMzNDIzNDUzMDMyNjEzOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzNaeWU0QkVJaklscnNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJaeWFFRzB0RHRqQmMyWCtpUmFIWmQyRHk0Y01rcnhpK2owSW1XNnpsRUdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIks2aHdmVHR5c3JOSXJ6eXU3ZlF6cWhmNkVpdk9ROVZHOHYwRThBY2QwSjdrVWFmU1U5QXJsV0xsdWd1M1Q3RmZGcjg2RE03NTVIWXRrT1hZRGc2VURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVCaVV2dDIxdzhaOTBMNU1DT3hQbGtkVWFrVndSd1YrQno5aTZxMVkzYkM5eHFkck50blNNc1E5akRSN2xjVnZiK1lMdnhwRCs1THo4bE1lRk5CV0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE4MjkzNTI5MzI1OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0NzE0Mzc5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUG9sXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQb2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3aDhwamJXK1JrRlB2OG5PQmVQSEprRWZKYlJ1bFdnVDZTd2ZiQzhZOERVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUwMDMyOTcwOSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0NTUzOTMxMzAwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
