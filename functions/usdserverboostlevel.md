# $serverBoostLevel
desc
### Использование
```php
$serverBoostLevel[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverBoostLevel',
  code: `
$serverBoostLevel[guildId?]`
// Возвращает: ...
})
```