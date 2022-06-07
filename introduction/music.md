# Музыкальные функции

{ % hint style='warning' % } Для использования музыкальных функций необходимо установить дополнительный пакет `@akarui/aoi.music` { % endhint % }

## Установка

```
npm i @akarui/aoi.music
```

## Настройка в aoi.js

После установки aoi.music, нужно настроить отдельный класс для музыки в aoi.js.

```js
const aoijs = require("aoi.js");

const bot = new aoijs.bot({
  token: "DISCORD BOT TOKEN",
  prefix: ".",
  intents: ["guilds", "guildMessages", "guildVoiceStates"],
});

const loader = new aoijs.LoadCommands(bot);

const voice = new aoijs.Voice(
  bot,
  {
    cache: {
      cacheType: "Memory",//Кэш
      enabled: true,
    }
  },
  true, //для включения pruneMusic 
);

voice.onTrackStart();

loader.load(bot.cmd, "./Commands/commands/"); //загрузчик обычных команд
loader.load(voice.cmd, "./Commands/voice/"); //загрузчик музыкальных команд
```
}
