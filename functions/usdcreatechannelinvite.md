# $createChannelInvite
desc
### Использование
```php
$createChannelInvite[channelId?;...options]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет | 
| ...options |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$createChannelInvite',
  code: `
$createChannelInvite[channelId?;...options]`
// Возвращает: ...
})
```