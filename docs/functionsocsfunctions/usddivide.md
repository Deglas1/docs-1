# $divide
desc
### Использование
```php
$divide[...numbers]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...numbers |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$divide',
  code: `
$divide[...numbers]`
// Возвращает: ...
})
```