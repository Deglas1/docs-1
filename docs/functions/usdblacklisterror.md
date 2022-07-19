# $blacklistError
desc
### Использование
```php
$blacklistError[type;ErrorMsg?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да | 
| ErrorMsg |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$blacklistError',
  code: `
$blacklistError[type;ErrorMsg?]`
// Возвращает: ...
})
```