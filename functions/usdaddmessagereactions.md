# $addMessageReactions
Добавляет реакции к указанному сообщению
### Использование
```php
$addMessageReactions[channelId;messageId;...reactions]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| messageId |  |  | Да | 
| ...reactions |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$addMessageReactions',
  code: `
$addMessageReactions[$channelID;$messageId;:joy:]`
// Возвращает: ...
})
```