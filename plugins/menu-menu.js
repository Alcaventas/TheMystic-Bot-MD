import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
┏━━━━━━━━━━━━━━━━┓
┣*⭐️[ 𝑴𝑬𝑵𝑼 𝑫𝑬 𝘼𝙇𝘾𝘼𝘽𝙊𝙏 🛠️ ]⭐️*
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃*⭐️[ 𝑴𝑬𝑵𝑼 𝑫𝑬 𝘼𝘿𝙈’𝙎]⭐️*
┣⚙️ _${usedPrefix}on *:* off *bienvenida*_
┣⚙️ _${usedPrefix}on *:* off *avisos*_
┣⚙️ _${usedPrefix}on *:* off *autonivel*_
┣⚙️ _${usedPrefix}on *:* off *stickers*_
┣⚙️ _${usedPrefix}on *:* off *autosticker*_
┣⚙️ _${usedPrefix}on *:* off *reaction*_
┣⚙️ _${usedPrefix}on *:* off *audios*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃*⭐️[ 𝑴𝑬𝑵𝑼 𝑫𝑬 𝑮𝑹𝑼𝑷𝑶𝑺]⭐️*
┣🦋 _${usedPrefix}sacar | ban | kick_
┣🦋 _${usedPrefix}grupo *abrir : cerrar*_
┣🦋 _${usedPrefix}group *open : close*_
┣🦋 _${usedPrefix}daradmin*@tag*_
┣🦋 _${usedPrefix}quitar *@tag*_
┣🦋 _${usedPrefix}banchat_
┣🦋 _${usedPrefix}unbanchat_
┣🦋 _${usedPrefix}banuser *@tag*_
┣🦋 _${usedPrefix}admins *texto*_
┣🦋 _${usedPrefix}invocar *texto*_
┣🦋 _${usedPrefix}newdesc *texto*_
┣🦋 _${usedPrefix}bienvenida *texto*_
┣🦋 _${usedPrefix}despedida *texto*_
┃*⭐️[ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎 / 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 ]⭐️*
┣🦋 _${usedPrefix}play *texto*_
┣🦋 _${usedPrefix}tts es *texto*_
┣🦋 _${usedPrefix}sticker | s *imagen*_
┗━━━━━━━━━━━━━━━━┛

*⚡️ ALCA VENTAS 528241050228 ⚡️*`;`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
