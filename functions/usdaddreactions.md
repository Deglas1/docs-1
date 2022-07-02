# $addReactions
desc
### Использование
```php
$addReactions[...reactions]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...reactions |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$addReactions',
  code: `
$addReactions[...reactions]`
// Возвращает: ...
})
```