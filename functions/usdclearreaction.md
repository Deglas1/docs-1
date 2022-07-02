# $clearReaction
desc
### Использование
```php
$clearReaction[channelId;messageId;userId;emoji]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| messageId |  |  | Да | 
| userId |  |  | Да |
| emoji |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$clearReaction',
  code: `
$clearReaction[channelId;messageId;userId;emoji]`
// Возвращает: ...
})
```