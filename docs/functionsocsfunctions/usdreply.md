# $reply
desc
### Использование
```php
$reply[messageId?;mentionUser?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Нет | 
| mentionUser |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$reply',
  code: `
$reply[messageId?;mentionUser?]`
// Возвращает: ...
})
```