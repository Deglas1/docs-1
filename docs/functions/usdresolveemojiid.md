# $resolveEmojiID
desc
### Использование
```php
$resolveEmojiID[emoji]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| emoji |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$resolveEmojiID',
  code: `
$resolveEmojiID[emoji]`
// Возвращает: ...
})
```