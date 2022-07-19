# $editWebhookMessage
desc
### Использование
```php
$editWebhookMessage[id;token;messageID;message;returnID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| id |  |  | Да | 
| token |  |  | Да | 
| messageID |  |  | Да |
| message |  |  | Да |
| returnID |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$editWebhookMessage',
  code: `
$editWebhookMessage[id;token;messageID;message;returnID?]`
// Возвращает: ...
})
```