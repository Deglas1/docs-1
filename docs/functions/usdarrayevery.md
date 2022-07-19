# $arrayEvery
desc
### Использование
```php
$arrayEvery[name;query;queryType?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| query |  |  | Да | 
| queryType |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$arrayEvery',
  code: `
$arrayEvery[name;query;queryType?]`
// Возвращает: ...
})
```