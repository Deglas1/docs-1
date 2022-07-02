# $isNumber
desc
### Использование
```php
$isNumber[number]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| number |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$isNumber',
  code: `
$isNumber[number]`
// Возвращает: ...
})
```