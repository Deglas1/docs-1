# $setServerVar
desc
### Использование
```php
$setServerVar[varname;value;Id?;table?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| value |  |  | Да | 
| Id |  |  | Нет |
| table |  |  | Нет |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$setServerVar',
  code: `
$setServerVar[varname;value;Id?;table?;]`
// Возвращает: ...
})
```