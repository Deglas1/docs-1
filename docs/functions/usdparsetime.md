# $parseTime
desc
### Использование
```php
$parseTime[time]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$parseTime',
  code: `
$parseTime[time]`
// Возвращает: ...
})
```