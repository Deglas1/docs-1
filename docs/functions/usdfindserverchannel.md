# $findServerChannel
desc
### Использование
```php
$findServerChannel[channelResolver;returnSelf?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelResolver |  |  | Да | 
| returnSelf |  |  | Нет | 
| guildId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$findServerChannel',
  code: `
$findServerChannel[channelResolver;returnSelf?;guildId?]`
// Возвращает: ...
})
```