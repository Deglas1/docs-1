# $reactionData
desc
### Использование
```php
$reactionData[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$reactionData',
  code: `
$reactionData[option?]`
// Возвращает: ...
})
```