let handler = async (m, { conn }) => {
let emot = pickRandom(["🎃", "❤", "😘", "😍", "💕", "😎", "🙌", "⭐", "👻", "🔥"])
conn.sendMessage(m.chat, {
react: {
text: emot,
key: m.key
}})}
handler.customPrefix = /(@ffxryu.18|Ryu|Ryu?|Ryu bot)/i
handler.command = new RegExp
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
