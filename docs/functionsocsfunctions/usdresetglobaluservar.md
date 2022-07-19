# $resetGlobalUserVar
desc
### Использование
```php
$resetGlobalUserVar[varname;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| table |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$resetGlobalUserVar',
  code: `
$resetGlobalUserVar[varname;table?]`
// Возвращает: ...
})
```