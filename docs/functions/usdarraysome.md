# $arraySome
desc
### Использование
```php
$arraySome[name;query;queryType?]
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
  name: '$arraySome',
  code: `
$arraySome[name;query;queryType?]`
// Возвращает: ...
})
```