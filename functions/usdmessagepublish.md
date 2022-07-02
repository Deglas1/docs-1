# $messagePublish
desc
### Использование
```php
$messagePublish[messageId?;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Нет | 
| channelId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$messagePublish',
  code: `
$messagePublish[messageId?;channelId?]`
// Возвращает: ...
})
```