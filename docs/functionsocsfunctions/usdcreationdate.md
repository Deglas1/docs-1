# $creationDate
desc
### Использование
```php
$creationDate[id;format?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| id |  |  | Да | 
| format |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$creationDate',
  code: `
$creationDate[id;format?]`
// Возвращает: ...
})
```