# messageDelete
Срабатывает когда кто-либо удаляет своё сообщение на сервере
### Использование
```php
bot.onМessageDelete()
bot.messageDeleteCommand
```
## Пример(ы)

```javascript
bot.messageDeletecommand({
  name: 'messageDelete',
  code: `Сообщение от $username в канале <#$channelUsed> было удалено!
Сообщение: $message
`
// Возвращает: Сообщение от ! Big Boy Deglas в канале #🛠・чат-стаффа было удалено!
Сообщение: Вередок гей
$dm[$botOwnerID]
})
```
