# $channelTopic
desc
### Использование
```php
$channelTopic[channelID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$channelTopic',
  code: `
$channelTopic[channelID?]`
// Возвращает: ...
})
```