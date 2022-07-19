# $createWebhook
desc
### Использование
```php
$createWebhook[channel;name;avatar;seperator?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channel |  |  | Да | 
| name |  |  | Да | 
| avatar |  |  | Да |
| seperator |  |  | Нет |
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$createWebhook',
  code: `
$createWebhook[channel;name;avatar;seperator?;"]`
// Возвращает: ...
})
```