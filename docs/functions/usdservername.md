# $serverName
desc
### Использование
```php
$serverName[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverName',
  code: `
$serverName[guildId?]`
// Возвращает: ...
})
```