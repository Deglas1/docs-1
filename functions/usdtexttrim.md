# $textTrim
desc
### Использование
```php
$textTrim[text]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$textTrim',
  code: `
$textTrim[text]`
// Возвращает: ...
})
```