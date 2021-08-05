const TelegramBot = require("node-telegram-bot-api");

const token = "1919817797:AAH93_HUPUmvlUupXQUuIarK9E3nWftF9Z0";

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

const compliments = [
    "Ти красива й така мила, що не закохатися в тебе просто неможливо!",
    "Будь-яка кімната стає світліше, коли ти заходиш туди.",
    "Від твоєї краси захоплює дух!",
    "Як тобі вдалося вкрасти моє серце?",
    "Поруч з тобою я забуваю про все. Ти займаєш всі мої думки.",
    "Твої очі – два бездонних океану, в яких я готовий потонути прямо в цю хвилину!",
    "Світло очей неможливо забути, красу душі неможливо зустріти, а посмішку неможливо забути.",
    "Твоя краса порівнянна тільки з яскравими екзотичними квітами, але тільки частково. Навіть вони не такі досконалі, як ти!",
    "Проти такої краси неможливо встояти.",
    "Ти сама справжня принцеса.",
    "Спасибі тобі за таку досконалу красу!",
    "Я про таку дівчину і не мріяв. Адже порівняно з дійсністю мрії виявилися нікчемними.",
    "Ти така красива, що поруч меркнуть зорі.",
    "Будь ласка, скажи мені, що я зможу милуватися твоєю красою вічно!",
    "Я вражений і просто обеззброєний твоєю красою!",
    "Магія — це коли наші очі зустрілися, і ми відчуваємо іскру між нашими серцями. Ти чудова.",
    "Мені важко відвернутися від твоїх незабутніх очей!",
    "Ти чарівна і неймовірна!",
    "Твої очі просто чарівні!",
    "Я благословенний твоєю присутністю. Це найкраще що у мене коли-небудь було.",
    "Ти немов Богиня, що зійшла з небес на землю.",
]


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendSticker(
      chatId,
      (sticker =
          "CAACAgUAAxkBAAEB0iNgEYLa2RpUYg_su_77iBuFknlGwgACQgAD4OrwHQdI1WZcLRu0HgQ")
  );
  bot.sendMessage(chatId, compliments[Math.floor(Math.random() * compliments.length)]);

  setInterval(function() {
    bot.sendSticker(
        chatId,
        (sticker =
            "CAACAgUAAxkBAAEB0iNgEYLa2RpUYg_su_77iBuFknlGwgACQgAD4OrwHQdI1WZcLRu0HgQ")
    );
    bot.sendMessage(chatId, compliments[Math.floor(Math.random() * compliments.length)]);
  }, 1000 * 60 * 1);
});