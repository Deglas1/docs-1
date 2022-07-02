# $onlyForChannels
desc
### Использование
```php
$onlyForChannels[...stuffs]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...stuffs |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$onlyForChannels',
  code: `
$onlyForChannels[...stuffs]`
// Возвращает: ...
})
```