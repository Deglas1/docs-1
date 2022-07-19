# $deleteEmoji
desc
### Использование
```php
$deleteEmoji[emoji]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| emoji |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$deleteEmoji',
  code: `
$deleteEmoji[emoji]`
// Возвращает: ...
})
```