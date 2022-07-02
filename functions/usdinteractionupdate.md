# $interactionUpdate
desc
### Использование
```php
$interactionUpdate[content?;embeds?;components?;files?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| content |  |  | Нет | 
| embeds |  |  | Нет | 
| components |  |  | Нет |
| files |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$interactionUpdate',
  code: `
$interactionUpdate[content?;embeds?;components?;files?]`
// Возвращает: ...
})
```