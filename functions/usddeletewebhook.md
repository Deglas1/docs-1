# $deleteWebhook
desc
### Использование
```php
$deleteWebhook[id;token]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| id |  |  | Да | 
| token |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$deleteWebhook',
  code: `
$deleteWebhook[id;token]`
// Возвращает: ...
})
```