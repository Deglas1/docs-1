# $arrayFilter
desc
### Использование
```php
$arrayFilter[name;query;queryType?;separator?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| query |  |  | Да | 
| queryType |  |  | Нет |
| separator |  |  | Нет |
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$arrayFilter',
  code: `
$arrayFilter[name;query;queryType?;separator?;"]`
// Возвращает: ...
})
```