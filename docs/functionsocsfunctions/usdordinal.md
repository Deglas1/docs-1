# $ordinal
desc
### Использование
```php
$ordinal[number]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| number |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$ordinal',
  code: `
$ordinal[number]`
// Возвращает: ...
})
```