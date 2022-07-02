# $toUpperCase
desc
### Использование
```php
$toUpperCase[text]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$toUpperCase',
  code: `
$toUpperCase[text]`
// Возвращает: ...
})
```