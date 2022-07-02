# $getChannelSlowmode
desc
### Использование
```php
$getChannelSlowmode[channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$getChannelSlowmode',
  code: `
$getChannelSlowmode[channelId?]`
// Возвращает: ...
})
```