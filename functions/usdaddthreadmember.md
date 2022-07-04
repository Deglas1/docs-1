# $addThreadMember
desc
### Использование
```php
$addThreadMember[channelId;threadId;userId;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| threadId |  |  | Да | 
| userId |  |  | Да |
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$addThreadMember',
  code: `
$addThreadMember[channelId;$channelID;userId;reason]`
// Возвращает: ...
})
```