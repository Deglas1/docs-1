# $serverMFALevel
desc
### Использование
```php
$serverMFALevel[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverMFALevel',
  code: `
$serverMFALevel[guildId?]`
// Возвращает: ...
})
```