# Таймеры

В aoi.js доступны таймеры - отложенные по времени коды, которые сработают через указанное время. После перезапусков / выключений бота всё равно работает, в отлчии от функции $wait

## Использование

```javascript
module.exports = [{
name: "remind",
code: `$setTimeout[reminder;1h;{ "message": "$messageSlice[1;20]", "userid": "$authorID" }]` // Запускает таймер с переменными сообщения и айди автора на один час 
}, {
name: "reminder", //Название таймера
type: "timeout",
code: `$sendDm[$timeoutData[userid];$timeoutData[message]]` //Отправляет в личные сообщения пользователю то сообщение, которое он указал в предыдущей команде
}]
```

Так-же у таймеров существуют собственные айди, при помощи которых можно останавливать их действие. Выполняется это при помощи функции $stopTimeout:
```javascript
bot.command({
  name: 'timeout',
  code: `
  $setVar[id;$setTimeout[remind;2h;{};false;true]]
  `
});

bot.command({
name: "stoptimeout",
code: `$stopTimeout[$getVar[id]]`
```
