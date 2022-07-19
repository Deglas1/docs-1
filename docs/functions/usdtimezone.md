# $timeZone
desc
### Использование
```php
$timeZone[timezone?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| timezone |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$timeZone',
  code: `
$timeZone[timezone?]`
// Возвращает: ...
})
```