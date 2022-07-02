# $clearReactions
desc
### Использование
```php
$clearReactions[channelId;messageId;emoji?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| messageId |  |  | Да | 
| emoji |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$clearReactions',
  code: `
$clearReactions[channelId;messageId;emoji?]`
// Возвращает: ...
})
```