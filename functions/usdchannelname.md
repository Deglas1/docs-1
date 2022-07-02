# $channelName
desc
### Использование
```php
$channelName[channelID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$channelName',
  code: `
$channelName[channelID?]`
// Возвращает: ...
})
```