# $getVar
desc
### Использование
```php
$getVar[varname;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| table |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$getVar',
  code: `
$getVar[varname;table?]`
// Возвращает: ...
})
```