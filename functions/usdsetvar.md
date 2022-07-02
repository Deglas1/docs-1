# $setVar
desc
### Использование
```php
$setVar[varname;value;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| value |  |  | Да | 
| table |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$setVar',
  code: `
$setVar[varname;value;table?]`
// Возвращает: ...
})
```