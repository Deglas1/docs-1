# $useChannel
desc
### Использование
```php
$useChannel[channelId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$useChannel',
  code: `
$useChannel[channelId]`
// Возвращает: ...
})
```