# $charCount
desc
### Использование
```php
$charCount[text?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$charCount',
  code: `
$charCount[text?]`
// Возвращает: ...
})
```