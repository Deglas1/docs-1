# $isValidHex
desc
### Использование
```php
$isValidHex[hex]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| hex |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$isValidHex',
  code: `
$isValidHex[hex]`
// Возвращает: ...
})
```