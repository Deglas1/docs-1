# $exec
desc
### Использование
```php
$exec[data.result]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| data.result |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$exec',
  code: `
$exec[data.result]`
// Возвращает: ...
})
```