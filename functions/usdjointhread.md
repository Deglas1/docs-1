# $joinThread
desc
### Использование
```php
$joinThread[channelId;threadId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| threadId |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$joinThread',
  code: `
$joinThread[channelId;threadId]`
// Возвращает: ...
})
```