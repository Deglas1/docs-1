# $unPinMessage
desc
### Использование
```php
$unPinMessage[messageId?;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Нет | 
| channelId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$unPinMessage',
  code: `
$unPinMessage[messageId?;channelId?]`
// Возвращает: ...
})
```