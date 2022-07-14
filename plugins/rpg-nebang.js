let handler = async (m, {
	conn,
	usedPrefix
}) => {

	let user = global.db.data.users[m.sender]
	let __timers = (new Date - user.lastlumber)
	let _timers = (500000 - __timers)
	let timers = clockString(_timers)
	
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup untuk bekerja\nharap isi stamina anda dengan _#eat_`)
	if (new Date - user.lastlumber > 500000) {
		let hus1 = `${(30, 300).getRandom()}`
		let hus2 = `${(3000, 30000).getRandom()}`
		let hus3 = `${(30, 300).getRandom()}`
		let hut = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

✔️ Mencari area....
`

let hut2 = `
⬛⬛⬛⬛⬛⬛🚶⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

➕ Hampir sampai....
`

let hut3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛🚶
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🌳

➕ Mulai menebang....
`

let hut4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🌳🏘️🌳🌳  🌳 🏘️ 🌳🌳🚶


➕ 💹Menerima hasil....
`

		let hsl = `
*《 Hasil Nebang Kali Ini 》*

 *🌳 = [ ${hus1} ] Kayu*
 *💹 = [ ${hus2} ] money*
 *✉️ = [ ${hus3} ] exp*
 
 Stamina anda berkurang -20
`
	user.axedurability -= 5
	user.stamina -= 20
    user.money += hus2
  	user.kayu += hus1
    user.exp += hus3

		setTimeout(() => {
			await conn.sendButton(m.chat, hsl, wm, null, [
		['Inventory', '/inv']
	], m)
		}, 20000)

		setTimeout(() => {
			m.reply(hut4)
		}, 18000)

		setTimeout(() => {
			m.reply(hut3)
		}, 15000)

		setTimeout(() => {
			m.reply(hut2)
		}, 14000)

		setTimeout(() => {
			m.reply(hut)
		}, 0)
		user.lastlumber = new Date * 1
		user.pickaxedurability -= 5
	} else await conn.sendButton(m.chat, `\n*Sepertinya Anda Sudah Kecapekan*\n*Silahkan Istirahat Dulu sekitar ${timers}*\n*Untuk bisa melanjutkan Nebang*\n`, author, null, [
		['Inventory', '/inv']
	], m)
	
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^(nebang)$/i
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