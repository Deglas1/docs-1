# $usersInChannel
desc
### Использование
```php
$usersInChannel[channelId;option?;sep?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| option |  |  | Нет | 
| sep |  |  | Нет |
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$usersInChannel',
  code: `
$usersInChannel[channelId;option?;sep?;"]`
// Возвращает: ...
})
```