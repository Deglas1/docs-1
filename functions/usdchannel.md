# $channel
desc
### Использование
```php
$channel[channelID;option]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelID |  |  | Да | 
| option |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$channel',
  code: `
$channel[channelID;option]`
// Возвращает: ...
})
```