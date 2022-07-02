# $userTag
desc
### Использование
```php
$userTag[userID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$userTag',
  code: `
$userTag[userID?]`
// Возвращает: ...
})
```