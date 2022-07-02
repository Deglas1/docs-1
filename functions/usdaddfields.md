# $addFields
desc
### Использование
```php
$addFields[...fields]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...fields |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$addFields',
  code: `
$addFields[...fields]`
// Возвращает: ...
})
```