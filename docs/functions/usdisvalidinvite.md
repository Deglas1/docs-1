# $isValidInvite
desc
### Использование
```php
$isValidInvite[link]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| link |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$isValidInvite',
  code: `
$isValidInvite[link]`
// Возвращает: ...
})
```