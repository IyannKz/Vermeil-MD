let handler = async (m, {
	conn,
	usedPrefix
}) => {

	let user = global.db.data.users[m.sender]
	let __timers = (new Date - user.lastnambang)
	let _timers = (500000 - __timers)
	let timers = clockString(_timers)
	
	if (user.pickaxe < 1) return m.reply(`*Kamu tidak memiliki Pickaxe*\n*Silahkan membeli Pickaxe si shop dengan mengetik _${usedPrefix}buy pickaxe_ atau _${usedPrefix}craft pickaxe_ agar kamu bisa nambang*`)
    if (user.pickaxedurability < 10) return m.reply(`Durability pickaxe anda kurang\nSilahkan repair pickaxe agar bisa nambang dengan menggunakan command _${usedPrefix}repair pickaxe_`)
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _#eat_`)
	if (new Date - user.lastnambang > 500000) {
		let rbrb1 = `${(1, 5).getRandom()}`
		let rbrb2 = `${(1, 10).getRandom()}`
		let rbrb3 = `${(1, 7).getRandom()}`
		let rbrb4 = `${(1, 4).getRandom()}`
		let rbrb5 = `${(1, 200).getRandom()}`
		let rbrb6 = `${(1, 200).getRandom()}`
		let rbrb7 = `${(1, 20).getRandom()}`
		let rbrb8 = `${(1, 100).getRandom()}`
		let rbrb9 = `${(1, 100).getRandom()}`
		let hsl = `
*《 Hasil Nambang Kali Ini 》*

 *💎 = [ ${rbrb1} ] Diamond*
 *⛓️ = [ ${rbrb2} ] Iron*
 *🪙 = [ ${rbrb3} ] Gold*
 *💚 = [ ${rbrb4} ] Emerald*
 *🪨 = [ ${rbrb5} ] Rock*
 *🌕 = [ ${rbrb6} ] Clay*
 *🕳️ = [ ${rbrb7} ] Coal*
 *🌑 = [ ${rbrb8} ] Sand*
 *✉️ = [ ${rbrb9} ] Exp*
 
 Stamina anda berkurang -20
`
		user.diamond += rbrb1
		user.iron += rbrb2
		user.gold += rbrb3
		user.emerald += rbrb4
		user.rock += rbrb5
		user.clay += rbrb6
		user.coal += rbrb7
		user.sand += rbrb8
		user.exp += rbrb9
		user.stamina -= 20

		setTimeout(() => {
			await conn.sendButton(m.chat, hsl, wm, null, [
		['Inventory', '/inv']
	], m)
		}, 20000)

		setTimeout(() => {
			m.reply(`Nah ini dia`)
		}, 18000)

		setTimeout(() => {
			m.reply(`Mulai Menambang`)
		}, 15000)

		setTimeout(() => {
			m.reply(`Wait...`)
		}, 14000)

		setTimeout(() => {
			m.reply(`Masuk Ke Tambang`)
		}, 0)
		user.lastnambang = new Date * 1
		user.pickaxedurability -= 5
	} else await conn.sendButton(m.chat, `\n*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat Dulu sekitar ${timers}*\n*Untuk bisa melanjutkan Nambang*\n`, author, null, [
		['Inventory', '/inv']
	], m)
	
}
handler.help = ['nambang']
handler.tags = ['rpg']
handler.command = /^(nambang)$/i
export default handler

function clockString(ms) {
	let h = Math.floor(ms / 3600000)
	let m = Math.floor(ms / 60000) % 60
	let s = Math.floor(ms / 1000) % 60
	console.log({
		ms,
		h,
		m,
		s
	})
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}