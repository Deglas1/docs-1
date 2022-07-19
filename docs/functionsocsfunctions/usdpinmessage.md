# $pinMessage
desc
### Использование
```php
$pinMessage[messageId?;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Нет | 
| channelId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$pinMessage',
  code: `
$pinMessage[messageId?;channelId?]`
// Возвращает: ...
})
```