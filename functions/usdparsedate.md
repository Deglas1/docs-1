# $parseDate
desc
### Использование
```php
$parseDate[time;type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| type |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$parseDate',
  code: `
$parseDate[time;type?]`
// Возвращает: ...
})
```