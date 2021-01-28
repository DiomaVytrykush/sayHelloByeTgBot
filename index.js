const TelegramBot = require("node-telegram-bot-api");

const token = "1599479093:AAGyjQIJ9fKMma9mpycxwNsaPLsOWOUGmB0";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on("message", (message) => {
  if (message.new_chat_members != undefined) {
    bot.sendMessage(
      message.chat.id,

      `Привіт, ${
        message.new_chat_member.username === undefined
          ? "Невідомий"
          : message.new_chat_member.username
      }!, ласкаво просимо у наш ламповий та розслабляючий чатик!
      Тут ти можеш обговорювати усе на світі, тільки пам'ятай головне, не порушуй правила!`
    );
    bot.sendSticker(
      message.chat.id,
      (sticker =
        "CAACAgUAAxkBAAEB0iNgEYLa2RpUYg_su_77iBuFknlGwgACQgAD4OrwHQdI1WZcLRu0HgQ")
    );
  }
});

bot.on("message", (message) => {
  if (message.left_chat_member != undefined) {
    bot.sendMessage(
      message.chat.id,
      `Пока, ${
        message.left_chat_member.username === undefined
          ? "Невідомий"
          : message.left_chat_member.username
      }!`
    );
    bot.sendSticker(
      message.chat.id,
      (sticker =
        "CAACAgUAAxkBAAEB0iNgEYLa2RpUYg_su_77iBuFknlGwgACQgAD4OrwHQdI1WZcLRu0HgQ")
    );
  }
});
