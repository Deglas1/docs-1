# $isUnicodeEmoji
desc
### Использование
```php
$isUnicodeEmoji[emoji]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| emoji |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$isUnicodeEmoji',
  code: `
$isUnicodeEmoji[emoji]`
// Возвращает: ...
})
```