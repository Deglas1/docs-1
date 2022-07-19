# $moveUser
desc
### Использование
```php
$moveUser[guildId;userId;channelId;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| userId |  |  | Да | 
| channelId |  |  | Да |
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$moveUser',
  code: `
$moveUser[guildId;userId;channelId;reason]`
// Возвращает: ...
})
```