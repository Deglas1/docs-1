# $createThread
desc
### Использование
```php
$createThread[channelId;name;archive?;type?;startMessage;returnId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| name |  |  | Да | 
| archive |  |  | Нет |
| type |  |  | Нет |
| startMessage |  |  | Да |
| returnId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$createThread',
  code: `
$createThread[channelId;name;archive?;type?;startMessage;returnId?]`
// Возвращает: ...
})
```