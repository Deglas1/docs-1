# $serverBoostCount
desc
### Использование
```php
$serverBoostCount[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverBoostCount',
  code: `
$serverBoostCount[guildId?]`
// Возвращает: ...
})
```