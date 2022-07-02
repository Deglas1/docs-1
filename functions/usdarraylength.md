# $arrayLength
desc
### Использование
```php
$arrayLength[name]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$arrayLength',
  code: `
$arrayLength[name]`
// Возвращает: ...
})
```