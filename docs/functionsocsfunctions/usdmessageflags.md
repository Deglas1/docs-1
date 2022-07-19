# $messageFlags
desc
### Использование
```php
$messageFlags[messageId;sep?;';channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Да | 
| sep |  |  | Нет | 
| ' |  |  | Да |
| channelId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$messageFlags',
  code: `
$messageFlags[messageId;sep?;';channelId?]`
// Возвращает: ...
})
```