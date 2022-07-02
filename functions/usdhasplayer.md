# $hasPlayer
desc
### Использование
```php
$hasPlayer[id?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| id |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$hasPlayer',
  code: `
$hasPlayer[id?]`
// Возвращает: ...
})
```