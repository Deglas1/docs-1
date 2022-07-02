# $setBotUsername
desc
### Использование
```php
$setBotUsername[username]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| username |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$setBotUsername',
  code: `
$setBotUsername[username]`
// Возвращает: ...
})
```