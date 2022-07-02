# $reactionCollector
desc
### Использование
```php
$reactionCollector[channelId;messageId;userFilters;time;reactions;awaits;removeReaction?;awaitData?;endAwait;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| messageId |  |  | Да | 
| userFilters |  |  | Да |
| time |  |  | Да |
| reactions |  |  | Да |
| awaits |  |  | Да |
| removeReaction |  |  | Нет |
| awaitData |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$reactionCollector',
  code: `
$reactionCollector[channelId;messageId;userFilters;time;reactions;awaits;removeReaction?;awaitData?;endAwait;]`
// Возвращает: ...
})
```