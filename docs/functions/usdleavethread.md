# $leaveThread
desc
### Использование
```php
$leaveThread[channelId;threadId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| threadId |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$leaveThread',
  code: `
$leaveThread[channelId;threadId]`
// Возвращает: ...
})
```