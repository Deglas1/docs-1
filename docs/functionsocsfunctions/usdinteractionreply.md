# $interactionReply
desc
### Использование
```php
$interactionReply[content?;embeds?;components?;files?;allowedMentions?;ephemeral?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| content |  |  | Нет | 
| embeds |  |  | Нет | 
| components |  |  | Нет |
| files |  |  | Нет |
| allowedMentions |  |  | Нет |
| ephemeral |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$interactionReply',
  code: `
$interactionReply[content?;embeds?;components?;files?;allowedMentions?;ephemeral?]`
// Возвращает: ...
})
```