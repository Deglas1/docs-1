# $sendWebhookMessage
desc
### Использование
```php
$sendWebhookMessage[id;token;message;returnId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| id |  |  | Да | 
| token |  |  | Да | 
| message |  |  | Да |
| returnId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$sendWebhookMessage',
  code: `
$sendWebhookMessage[id;token;message;returnId?]`
// Возвращает: ...
})
```