# $apiMessage
desc
### Использование
```php
$apiMessage[channelId;content;embeds?;components?;files?;stickers?;allowedMentions?;reply?;returnId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| content |  |  | Да | 
| embeds |  |  | Нет |
| components |  |  | Нет |
| files |  |  | Нет |
| stickers |  |  | Нет |
| allowedMentions |  |  | Нет |
| reply |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$apiMessage',
  code: `
$apiMessage[channelId;content;embeds?;components?;files?;stickers?;allowedMentions?;reply?;returnId?]`
// Возвращает: ...
})
```