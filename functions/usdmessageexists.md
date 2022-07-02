# $messageExists
desc
### Использование
```php
$messageExists[messageId;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Да | 
| channelId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$messageExists',
  code: `
$messageExists[messageId;channelId?]`
// Возвращает: ...
})
```