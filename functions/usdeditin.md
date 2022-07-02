# $editIn
desc
### Использование
```php
$editIn[time;...mesgs]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| ...mesgs |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$editIn',
  code: `
$editIn[time;...mesgs]`
// Возвращает: ...
})
```