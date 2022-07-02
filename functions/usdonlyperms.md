# $onlyPerms
desc
### Использование
```php
$onlyPerms[...stuffs]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...stuffs |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$onlyPerms',
  code: `
$onlyPerms[...stuffs]`
// Возвращает: ...
})
```