let handler = async m => m.reply(`
╭─「 Donasi • Pulsa,Dana,Gopay」
│ • Smartfren: [0882-0094-96234]
│ • Dana: [0882-0094-96234]
│ • Gopay: [0882-0094-96234]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/62882009496234
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
