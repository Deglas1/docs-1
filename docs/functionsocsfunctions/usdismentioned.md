# $isMentioned
desc
### Использование
```php
$isMentioned[opt]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| opt |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$isMentioned',
  code: `
$isMentioned[opt]`
// Возвращает: ...
})
```