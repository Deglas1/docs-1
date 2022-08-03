# messageUpdate
Сообщает об обновлении сообщения пользователя 
### Использование
```php
bot.onmessageUpdate()
bot.messageUpdateCommand
```
## Пример(ы)

```javascript
bot.messageUpdatecommand({
  name: 'messageUpdate',
  code: `
Сообщение от $username в канале <#$channelUsed> было обновлено!
Старое сообщение: $oldMessage
Новое сообщение: $message
$dm[$botOwnerID]
`
// Возвращает: Сообщение от ! Big Boy Deglas в канале #🛠・чат-стаффа было обновлено!
// Старое сообщение: Вередок гей
// Новое сообщение: Вередок легенда 
})
```
