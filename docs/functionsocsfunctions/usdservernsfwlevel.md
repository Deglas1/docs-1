# $serverNSFWLevel
desc
### Использование
```php
$serverNSFWLevel[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverNSFWLevel',
  code: `
$serverNSFWLevel[guildId?]`
// Возвращает: ...
})
```