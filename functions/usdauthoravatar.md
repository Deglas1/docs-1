# $authorAvatar
desc
### Использование
```php
$authorAvatar[size?;dynamic?;format?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| size |  |  | Нет | 
| dynamic |  |  | Нет | 
| format |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$authorAvatar',
  code: `
$authorAvatar[size?;dynamic?;format?]`
// Возвращает: ...
})
```