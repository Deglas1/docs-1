# $globalCooldown
desc
### Использование
```php
$globalCooldown[time;errorObject?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| errorObject |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$globalCooldown',
  code: `
$globalCooldown[time;errorObject?]`
// Возвращает: ...
})
```