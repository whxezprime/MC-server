const bedrock = require('bedrock-protocol');

const SERVER_HOST = 'whxezsmp.progamer.me';
const SERVER_PORT = 41708;
const BOT_NAME = 'AFK_Bot_Wxz';

function createBot() {
  console.log(`Đang kết nối tới ${SERVER_HOST}:${SERVER_PORT}...`);

  const client = bedrock.createClient({
    host: SERVER_HOST,
    port: SERVER_PORT,
    username: BOT_NAME,
    offline: true // Chạy chế độ offline (cracked) để không cần đăng nhập tài khoản Microsoft
  });

  client.on('spawn', () => {
    console.log('Bot đã vào game thành công!');
  });

  client.on('disconnect', (packet) => {
    console.log('Bị ngắt kết nối:', packet.reason || packet);
    reconnect();
  });

  client.on('error', (err) => {
    console.error('Lỗi kết nối:', err.message);
    reconnect();
  });
}

function reconnect() {
  console.log('Thử kết nối lại sau 15 giây...');
  setTimeout(createBot, 15000);
}

createBot();
