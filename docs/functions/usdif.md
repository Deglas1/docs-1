# $if
desc
### Использование
```php
$if[condition;trueawait;falseawait?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| condition |  |  | Да | 
| trueawait |  |  | Да | 
| falseawait |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$if',
  code: `
$if[condition;trueawait;falseawait?]`
// Возвращает: ...
})
```