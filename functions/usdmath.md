# $math
desc
### Использование
```php
$math[operation]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| operation |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$math',
  code: `
$math[operation]`
// Возвращает: ...
})
```