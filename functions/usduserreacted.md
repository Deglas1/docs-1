# $userReacted
desc
### Использование
```php
$userReacted[channelID;messageID;userID;reaction]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelID |  |  | Да | 
| messageID |  |  | Да | 
| userID |  |  | Да |
| reaction |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$userReacted',
  code: `
$userReacted[channelID;messageID;userID;reaction]`
// Возвращает: ...
})
```