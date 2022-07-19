# $msg
desc
### Использование
```php
$msg[channelId?;messageId?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет | 
| messageId |  |  | Нет | 
| option |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$msg',
  code: `
$msg[channelId?;messageId?;option?]`
// Возвращает: ...
})
```