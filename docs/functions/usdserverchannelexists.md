# $serverChannelExists
desc
### Использование
```php
$serverChannelExists[channel;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channel |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$serverChannelExists',
  code: `
$serverChannelExists[channel;guildId?]`
// Возвращает: ...
})
```