# $channelID
desc
### Использование
```php
$channelID[name]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$channelID',
  code: `
$channelID[name]`
// Возвращает: ...
})
```