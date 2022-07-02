# $arraySplice
desc
### Использование
```php
$arraySplice[name;index;amount;...elements]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| index |  |  | Да | 
| amount |  |  | Да |
| ...elements |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$arraySplice',
  code: `
$arraySplice[name;index;amount;...elements]`
// Возвращает: ...
})
```