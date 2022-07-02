# $setGlobalUserVar
desc
### Использование
```php
$setGlobalUserVar[varname;value;userId?;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| value |  |  | Да | 
| userId |  |  | Нет |
| table |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$setGlobalUserVar',
  code: `
$setGlobalUserVar[varname;value;userId?;table?]`
// Возвращает: ...
})
```