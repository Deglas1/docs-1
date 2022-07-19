# $reverse
desc
### Использование
```php
$reverse[text]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$reverse',
  code: `
$reverse[text]`
// Возвращает: ...
})
```