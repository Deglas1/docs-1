# $expandNumber
desc
### Использование
```php
$expandNumber[abbrNumber]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| abbrNumber |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$expandNumber',
  code: `
$expandNumber[abbrNumber]`
// Возвращает: ...
})
```