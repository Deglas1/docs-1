# $formatDate
desc
### Использование
```php
$formatDate[date?;{timeZone: d.timezone});format?;DD MMMM YYYY"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| date |  |  | Нет | 
| {timeZone: d.timezone}) |  |  | Да | 
| format |  |  | Нет |
| DD MMMM YYYY" |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$formatDate',
  code: `
$formatDate[date?;{timeZone: d.timezone});format?;DD MMMM YYYY"]`
// Возвращает: ...
})
```