# $arrayIndexOf
desc
### Использование
```php
$arrayIndexOf[name;query]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| query |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$arrayIndexOf',
  code: `
$arrayIndexOf[name;query]`
// Возвращает: ...
})
```