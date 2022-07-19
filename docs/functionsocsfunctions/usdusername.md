# $username
desc
### Использование
```php
$username[userID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$username',
  code: `
$username[userID?]`
// Возвращает: ...
})
```