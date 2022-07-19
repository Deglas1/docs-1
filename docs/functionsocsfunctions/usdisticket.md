# $isTicket
desc
### Использование
```php
$isTicket[channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$isTicket',
  code: `
$isTicket[channelId?]`
// Возвращает: ...
})
```