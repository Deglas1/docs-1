# $onlyForIDs
desc
### Использование
```php
$onlyForIDs[...stuffs]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...stuffs |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$onlyForIDs',
  code: `
$onlyForIDs[...stuffs]`
// Возвращает: ...
})
```