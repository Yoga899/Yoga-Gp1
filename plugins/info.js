let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Yoga Bt
╠➥ Script: @Nurotomo
║
╠➥ Medsos
╠➥ Instagram: Belum Buat
╠➥ YouTube: Wiskhas Yt
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-0094-96233
╠➥ Dana: 0882-0094-96234
╠➥ Gopay: 0882-0094-96234
║
║>Request? Wa.me/62882009496234
║
╠═〘 YogA Bot〙 ═
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

