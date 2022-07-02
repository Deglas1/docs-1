# $awaitMessageReactions
desc
### Использование
```php
$awaitMessageReactions[channelId;messageId;filter;time;reactions;commands;errorMsg?;data?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| messageId |  |  | Да | 
| filter |  |  | Да |
| time |  |  | Да |
| reactions |  |  | Да |
| commands |  |  | Да |
| errorMsg |  |  | Нет |
| data |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$awaitMessageReactions',
  code: `
$awaitMessageReactions[channelId;messageId;filter;time;reactions;commands;errorMsg?;data?]`
// Возвращает: ...
})
```