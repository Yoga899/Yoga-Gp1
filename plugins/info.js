let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Yoga-Bt
╠➥ Script: @Nurotomo
║
╠➥ Github: +
╠➥ Instagram: gada:(
╠➥ YouTube: Wiskhas YT
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ Mfarel
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-0094-96234
╠➥ Dana: 0882-0094-96234
╠➥ Gopay: 0882-0094-96234
║
║>Owner? Wa.me/62882009496234
║
╠═〘 Yoga BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

