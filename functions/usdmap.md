# $map
desc
### Использование
```php
$map[text;split;awaits;sep?;']
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| split |  |  | Да | 
| awaits |  |  | Да |
| sep |  |  | Нет |
| ' |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$map',
  code: `
$map[text;split;awaits;sep?;']`
// Возвращает: ...
})
```