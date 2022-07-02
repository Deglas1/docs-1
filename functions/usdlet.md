# $let
desc
### Использование
```php
$let[varname;varvalue]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| varvalue |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$let',
  code: `
$let[varname;varvalue]`
// Возвращает: ...
})
```