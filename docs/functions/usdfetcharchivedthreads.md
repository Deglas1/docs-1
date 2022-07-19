# $fetchArchivedThreads
desc
### Использование
```php
$fetchArchivedThreads[channelId?;...options]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет | 
| ...options |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$fetchArchivedThreads',
  code: `
$fetchArchivedThreads[channelId?;...options]`
// Возвращает: ...
})
```