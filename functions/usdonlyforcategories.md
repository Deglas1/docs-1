# $onlyForCategories
desc
### Использование
```php
$onlyForCategories[...stuffs]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...stuffs |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$onlyForCategories',
  code: `
$onlyForCategories[...stuffs]`
// Возвращает: ...
})
```