# $interactionFollowUp
desc
### Использование
```php
$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| content |  |  | Нет | 
| embeds |  |  | Нет | 
| components |  |  | Нет |
| files |  |  | Нет |
| ephemeral |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$interactionFollowUp',
  code: `
$interactionFollowUp[content?;embeds?;components?;files?;ephemeral?]`
// Возвращает: ...
})
```