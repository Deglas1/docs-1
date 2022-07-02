# $arrayFind
desc
### Использование
```php
$arrayFind[name;query;queryType?]
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
  name: '$arrayFind',
  code: `
$arrayFind[name;query;queryType?]`
// Возвращает: ...
})
```