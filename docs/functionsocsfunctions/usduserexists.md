# $userExists
desc
### Использование
```php
$userExists[userID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$userExists',
  code: `
$userExists[userID?]`
// Возвращает: ...
})
```