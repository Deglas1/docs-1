# $serverAvailable
desc
### Использование
```php
$serverAvailable[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverAvailable',
  code: `
$serverAvailable[guildId?]`
// Возвращает: ...
})
```