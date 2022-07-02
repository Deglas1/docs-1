# $hasPermsInChannel
desc
### Использование
```php
$hasPermsInChannel[channelID;roleoruserId;...perms]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelID |  |  | Да | 
| roleoruserId |  |  | Да | 
| ...perms |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$hasPermsInChannel',
  code: `
$hasPermsInChannel[channelID;roleoruserId;...perms]`
// Возвращает: ...
})
```