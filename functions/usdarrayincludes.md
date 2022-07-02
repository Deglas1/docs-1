# $arrayIncludes
desc
### Использование
```php
$arrayIncludes[name;query]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| query |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$arrayIncludes',
  code: `
$arrayIncludes[name;query]`
// Возвращает: ...
})
```