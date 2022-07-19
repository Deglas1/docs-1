# $serverRulesChannelID
desc
### Использование
```php
$serverRulesChannelID[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverRulesChannelID',
  code: `
$serverRulesChannelID[guildId?]`
// Возвращает: ...
})
```