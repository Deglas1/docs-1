# $allEmojisCount
desc
### Использование
```php
$allEmojisCount[type]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$allEmojisCount',
  code: `
$allEmojisCount[type]`
// Возвращает: ...
})
```