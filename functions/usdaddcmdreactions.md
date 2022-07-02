# $addCmdReactions
desc
### Использование
```php
$addCmdReactions[...reactions]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...reactions |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$addCmdReactions',
  code: `
$addCmdReactions[:heart:;:joy:]`
})
```