# $nonEscape
desc
### Использование
```php
$nonEscape[msg]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| msg |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$nonEscape',
  code: `
$nonEscape[msg]`
// Возвращает: ...
})
```