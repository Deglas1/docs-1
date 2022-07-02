# $roundTenth
desc
### Использование
```php
$roundTenth[number;decimalPosition]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| number |  |  | Да | 
| decimalPosition |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$roundTenth',
  code: `
$roundTenth[number;decimalPosition]`
// Возвращает: ...
})
```