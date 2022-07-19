# $getUserBadges
desc
### Использование
```php
$getUserBadges[userId?;sep?;']
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| sep |  |  | Нет | 
| ' |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$getUserBadges',
  code: `
$getUserBadges[userId?;sep?;']`
// Возвращает: ...
})
```