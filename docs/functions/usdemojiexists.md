# $emojiExists
desc
### Использование
```php
$emojiExists[emoji]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| emoji |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$emojiExists',
  code: `
$emojiExists[emoji]`
// Возвращает: ...
})
```