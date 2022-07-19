# $tempCooldown
desc
### Использование
```php
$tempCooldown[time;id;errorObject?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| id |  |  | Да | 
| errorObject |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$tempCooldown',
  code: `
$tempCooldown[time;id;errorObject?]`
// Возвращает: ...
})
```