# $arrayAt
desc
### Использование
```php
$arrayAt[name;index]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| index |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$arrayAt',
  code: `
$arrayAt[name;index]`
// Возвращает: ...
})
```