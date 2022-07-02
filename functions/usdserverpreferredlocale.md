# $serverPreferredLocale
desc
### Использование
```php
$serverPreferredLocale[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverPreferredLocale',
  code: `
$serverPreferredLocale[guildId?]`
// Возвращает: ...
})
```