# $arraylastIndexOf
desc
### Использование
```php
$arraylastIndexOf[name;query]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| query |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$arraylastIndexOf',
  code: `
$arraylastIndexOf[name;query]`
// Возвращает: ...
})
```