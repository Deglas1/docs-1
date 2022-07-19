# $arrayShift
desc
### Использование
```php
$arrayShift[name]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$arrayShift',
  code: `
$arrayShift[name]`
// Возвращает: ...
})
```