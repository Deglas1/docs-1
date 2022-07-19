# $newRole
desc
### Использование
```php
$newRole[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$newRole',
  code: `
$newRole[option?]`
// Возвращает: ...
})
```