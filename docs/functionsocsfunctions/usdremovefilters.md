# $removeFilters
desc
### Использование
```php
$removeFilters[...filter]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...filter |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$removeFilters',
  code: `
$removeFilters[...filter]`
// Возвращает: ...
})
```