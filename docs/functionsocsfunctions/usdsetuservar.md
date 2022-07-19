# $setUserVar
desc
### Использование
```php
$setUserVar[varname;value;userId?;Id?;table?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| value |  |  | Да | 
| userId |  |  | Нет |
| Id |  |  | Нет |
| table |  |  | Нет |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$setUserVar',
  code: `
$setUserVar[varname;value;userId?;Id?;table?;]`
// Возвращает: ...
})
```