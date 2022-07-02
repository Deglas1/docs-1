# $fetchClientValues
desc
### Использование
```php
$fetchClientValues[func]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| func |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$fetchClientValues',
  code: `
$fetchClientValues[func]`
// Возвращает: ...
})
```