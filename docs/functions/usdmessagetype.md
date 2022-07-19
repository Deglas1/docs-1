# $messageType
desc
### Использование
```php
$messageType[messageId?;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Нет | 
| channelId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$messageType',
  code: `
$messageType[messageId?;channelId?]`
// Возвращает: ...
})
```