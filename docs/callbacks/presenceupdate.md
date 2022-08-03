# presenceUpdate
desc
### Использование
```php
bot.onpresenceUpdate()
bot.presenceUpdateCommand
```
## Пример(ы)

```javascript
bot.presenceUpdatecommand({
  name: 'presenceUpdate',
  code: `
$username обновил статус!
Старый статус:  $oldPresence[status]
$dm[$botOwnerID]
`
// Возвращает: ! Big Boy Deglas#5497 обновил статус!
Старый статус: 
})
```
