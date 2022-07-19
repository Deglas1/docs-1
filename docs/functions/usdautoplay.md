# $autoPlay
desc
### Использование
```php
$autoPlay[type]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$autoPlay',
  code: `
$autoPlay[song]`
// Возвращает: ...
})
```