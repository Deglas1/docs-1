# $fetch
desc
### Использование
```php
$fetch[method;query;morequery]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| method |  |  | Да | 
| query |  |  | Да | 
| morequery |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$fetch',
  code: `
$fetch[method;query;morequery]`
// Возвращает: ...
})
```