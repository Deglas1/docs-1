# $isValidLink
desc
### Использование
```php
$isValidLink[link]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| link |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$isValidLink',
  code: `
$isValidLink[link]`
// Возвращает: ...
})
```