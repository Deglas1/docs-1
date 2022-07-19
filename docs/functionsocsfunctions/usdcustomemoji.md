# $customEmoji
desc
### Использование
```php
$customEmoji[emoji;id?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| emoji |  |  | Да | 
| id |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$customEmoji',
  code: `
$customEmoji[emoji;id?]`
// Возвращает: ...
})
```