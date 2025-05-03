require('dotenv').config();
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(ctx => {
  ctx.reply("Добро пожаловать!", {
    reply_markup:{
      inline_keyboard: [[
        { text: "▶️ Начать клип", web_app: { url: "https://eh-candy-program-useful.trycloudflare.com" } }
      ]]
    }
  });
});

bot.launch();