# $isChannelManageable
desc
### Использование
```php
$isChannelManageable[channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$isChannelManageable',
  code: `
$isChannelManageable[channelId?]`
// Возвращает: ...
})
```