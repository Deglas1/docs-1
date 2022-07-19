# $oldState
desc
### Использование
```php
$oldState[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$oldState',
  code: `
$oldState[option?]`
// Возвращает: ...
})
```