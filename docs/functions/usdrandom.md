# $random
desc
### Использование
```php
$random[n1;n2;allow?;random?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| n1 |  |  | Да | 
| n2 |  |  | Да | 
| allow |  |  | Нет |
| random |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$random',
  code: `
$random[n1;n2;allow?;random?]`
// Возвращает: ...
})
```