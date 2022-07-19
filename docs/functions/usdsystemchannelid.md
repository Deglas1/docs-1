# $systemChannelID
desc
### Использование
```php
$systemChannelID[guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$systemChannelID',
  code: `
$systemChannelID[guildID?]`
// Возвращает: ...
})
```