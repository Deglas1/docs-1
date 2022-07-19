# $modifyEmoji
desc
### Использование
```php
$modifyEmoji[guildId;emojiId;name;...roles]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| emojiId |  |  | Да | 
| name |  |  | Да |
| ...roles |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$modifyEmoji',
  code: `
$modifyEmoji[guildId;emojiId;name;...roles]`
// Возвращает: ...
})
```