# $setBotAvatar
desc
### Использование
```php
$setBotAvatar[avatar]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| avatar |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$setBotAvatar',
  code: `
$setBotAvatar[avatar]`
// Возвращает: ...
})
```