# $messageURL
desc
### Использование
```php
$messageURL[messageId?;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Нет | 
| channelId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$messageURL',
  code: `
$messageURL[messageId?;channelId?]`
// Возвращает: ...
})
```