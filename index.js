require('dotenv').config()
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => {
    ctx.reply('Тут будуть сповіщення від клієнтів');
    console.log(ctx.message.from);
  
})
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))