# $resetServerVar
desc
### Использование
```php
$resetServerVar[varname;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| table |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$resetServerVar',
  code: `
$resetServerVar[varname;table?]`
// Возвращает: ...
})
```