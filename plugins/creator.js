let handler = async (m, { conn }) => {

  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  const town = await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m, {quoted: fkontak})
  await conn.reply(m.chat, "Owner", m, {quoted: town})
  
  const data = global.girlfren.filter(([id, isCreator]) => id && isCreator)
  const town = await conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m, {quoted: fkontak})
  await conn.reply(m.chat, "GF Owner", m, {quoted: town})

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
