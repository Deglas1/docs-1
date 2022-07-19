# $newState
desc
### Использование
```php
$newState[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$newState',
  code: `
$newState[option?]`
// Возвращает: ...
})
```