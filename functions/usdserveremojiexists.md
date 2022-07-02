# $serverEmojiExists
desc
### Использование
```php
$serverEmojiExists[emoji;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| emoji |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$serverEmojiExists',
  code: `
$serverEmojiExists[emoji;guildId?]`
// Возвращает: ...
})
```