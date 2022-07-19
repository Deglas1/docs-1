# $stopTimeout
desc
### Использование
```php
$stopTimeout[id]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| id |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$stopTimeout',
  code: `
$stopTimeout[id]`
// Возвращает: ...
})
```