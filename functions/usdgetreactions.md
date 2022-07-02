# $getReactions
desc
### Использование
```php
$getReactions[channelId;messageId;reaction;force?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| messageId |  |  | Да | 
| reaction |  |  | Да |
| force |  |  | Нет |
| option |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getReactions',
  code: `
$getReactions[channelId;messageId;reaction;force?;option?]`
// Возвращает: ...
})
```