# $onlyForRoles
desc
### Использование
```php
$onlyForRoles[...stuffs]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...stuffs |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$onlyForRoles',
  code: `
$onlyForRoles[...stuffs]`
// Возвращает: ...
})
```