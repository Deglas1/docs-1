# $interactionEdit
desc
### Использование
```php
$interactionEdit[content?;embeds?;components?;files?;allowedMentions]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| content |  |  | Нет | 
| embeds |  |  | Нет | 
| components |  |  | Нет |
| files |  |  | Нет |
| allowedMentions |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$interactionEdit',
  code: `
$interactionEdit[content?;embeds?;components?;files?;allowedMentions]`
// Возвращает: ...
})
```