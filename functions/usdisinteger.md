# $isInteger
desc
### Использование
```php
$isInteger[number]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| number |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$isInteger',
  code: `
$isInteger[number]`
// Возвращает: ...
})
```