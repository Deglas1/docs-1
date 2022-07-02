# $user
desc
### Использование
```php
$user[userID?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет | 
| option |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$user',
  code: `
$user[userID?;option?]`
// Возвращает: ...
})
```