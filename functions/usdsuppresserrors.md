# $suppressErrors
desc
### Использование
```php
$suppressErrors[text?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$suppressErrors',
  code: `
$suppressErrors[text?]`
// Возвращает: ...
})
```