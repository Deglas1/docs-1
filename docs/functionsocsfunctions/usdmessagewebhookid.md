# $messageWebhookId
desc
### Использование
```php
$messageWebhookId[messageId?;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Нет | 
| channelId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$messageWebhookId',
  code: `
$messageWebhookId[messageId?;channelId?]`
// Возвращает: ...
})
```