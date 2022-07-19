# $indexOfArg
desc
### Использование
```php
$indexOfArg[string;query]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| string |  |  | Да | 
| query |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$indexOfArg',
  code: `
$indexOfArg[string;query]`
// Возвращает: ...
})
```