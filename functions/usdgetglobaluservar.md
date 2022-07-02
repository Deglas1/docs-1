# $getGlobalUserVar
desc
### Использование
```php
$getGlobalUserVar[varname;userID?;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| userID |  |  | Нет | 
| table |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getGlobalUserVar',
  code: `
$getGlobalUserVar[varname;userID?;table?]`
// Возвращает: ...
})
```