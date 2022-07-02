# $createVar
desc
### Использование
```php
$createVar[table;...vars]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| table |  |  | Да | 
| ...vars |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$createVar',
  code: `
$createVar[table;...vars]`
// Возвращает: ...
})
```