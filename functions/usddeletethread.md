# $deleteThread
desc
### Использование
```php
$deleteThread[channelId;threadId;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| threadId |  |  | Да | 
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$deleteThread',
  code: `
$deleteThread[channelId;threadId;reason]`
// Возвращает: ...
})
```