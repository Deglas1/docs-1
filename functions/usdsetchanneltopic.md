# $setChannelTopic
desc
### Использование
```php
$setChannelTopic[channelId;topic]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| topic |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$setChannelTopic',
  code: `
$setChannelTopic[channelId;topic]`
// Возвращает: ...
})
```