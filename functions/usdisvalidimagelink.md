# $isValidImageLink
desc
### Использование
```php
$isValidImageLink[link]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| link |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$isValidImageLink',
  code: `
$isValidImageLink[link]`
// Возвращает: ...
})
```