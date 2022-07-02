# $serverAFKChannelID
desc
### Использование
```php
$serverAFKChannelID[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverAFKChannelID',
  code: `
$serverAFKChannelID[guildId?]`
// Возвращает: ...
})
```