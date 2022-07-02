# $serverFeatures
desc
### Использование
```php
$serverFeatures[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverFeatures',
  code: `
$serverFeatures[guildId?]`
// Возвращает: ...
})
```