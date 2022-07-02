# $reactionCount
desc
### Использование
```php
$reactionCount[channelId;messageId;emojiResolver]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| messageId |  |  | Да | 
| emojiResolver |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$reactionCount',
  code: `
$reactionCount[channelId;messageId;emojiResolver]`
// Возвращает: ...
})
```