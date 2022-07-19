# $isBot
desc
### Использование
```php
$isBot[userId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$isBot',
  code: `
$isBot[userId?]`
// Возвращает: ...
})
```