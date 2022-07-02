# $fetchActiveThreads
desc
### Использование
```php
$fetchActiveThreads[channelId?;...options]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет | 
| ...options |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$fetchActiveThreads',
  code: `
$fetchActiveThreads[channelId?;...options]`
// Возвращает: ...
})
```