# $awaitMessages
desc
### Использование
```php
$awaitMessages[channelId;userFilter;time;replies;cmds;errorMsg?;data?;dm]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| userFilter |  |  | Да | 
| time |  |  | Да |
| replies |  |  | Да |
| cmds |  |  | Да |
| errorMsg |  |  | Нет |
| data |  |  | Нет |
| dm |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$awaitMessages',
  code: `
$awaitMessages[channelId;userFilter;time;replies;cmds;errorMsg?;data?;dm]`
// Возвращает: ...
})
```