# $textInputValue
desc
### Использование
```php
$textInputValue[customID]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| customID |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$textInputValue',
  code: `
$textInputValue[customID]`
// Возвращает: ...
})
```