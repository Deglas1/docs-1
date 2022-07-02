# $editMessage
desc
### Использование
```php
$editMessage[messageId;msg;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Да | 
| msg |  |  | Да | 
| channelId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$editMessage',
  code: `
$editMessage[messageId;msg;channelId?]`
// Возвращает: ...
})
```