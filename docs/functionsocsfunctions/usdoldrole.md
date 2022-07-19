# $oldRole
desc
### Использование
```php
$oldRole[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$oldRole',
  code: `
$oldRole[option?]`
// Возвращает: ...
})
```