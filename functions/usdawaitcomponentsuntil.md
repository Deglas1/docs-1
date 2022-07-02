# $awaitComponentsUntil
desc
### Использование
```php
$awaitComponentsUntil[channelId;messageId;userFilter;time;customIds;awaitCommands;errorMsg?;data?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| messageId |  |  | Да | 
| userFilter |  |  | Да |
| time |  |  | Да |
| customIds |  |  | Да |
| awaitCommands |  |  | Да |
| errorMsg |  |  | Нет |
| data |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$awaitComponentsUntil',
  code: `
$awaitComponentsUntil[channelId;messageId;userFilter;time;customIds;awaitCommands;errorMsg?;data?]`
// Возвращает: ...
})
```