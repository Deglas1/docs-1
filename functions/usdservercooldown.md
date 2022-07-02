# $serverCooldown
desc
### Использование
```php
$serverCooldown[time;errorObject?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| errorObject |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$serverCooldown',
  code: `
$serverCooldown[time;errorObject?]`
// Возвращает: ...
})
```