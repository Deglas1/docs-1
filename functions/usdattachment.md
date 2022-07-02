# $attachment
desc
### Использование
```php
$attachment[attachment;name;type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| attachment |  |  | Да | 
| name |  |  | Да | 
| type |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$attachment',
  code: `
$attachment[attachment;name;type?]`
// Возвращает: ...
})
```