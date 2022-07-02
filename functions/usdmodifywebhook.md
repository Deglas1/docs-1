# $modifyWebhook
desc
### Использование
```php
$modifyWebhook[webhookId;name;avatar;channelId?;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| webhookId |  |  | Да | 
| name |  |  | Да | 
| avatar |  |  | Да |
| channelId |  |  | Нет |
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$modifyWebhook',
  code: `
$modifyWebhook[webhookId;name;avatar;channelId?;reason]`
// Возвращает: ...
})
```