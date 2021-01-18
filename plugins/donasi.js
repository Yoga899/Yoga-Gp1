let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Dana [0882009496234]
│ • Smartfren [0882009496234]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
