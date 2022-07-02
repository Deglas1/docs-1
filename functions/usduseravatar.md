# $userAvatar
desc
### Использование
```php
$userAvatar[userID?;size?;dynamic?;format]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет | 
| size |  |  | Нет | 
| dynamic |  |  | Нет |
| format |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$userAvatar',
  code: `
$userAvatar[userID?;size?;dynamic?;format]`
// Возвращает: ...
})
```