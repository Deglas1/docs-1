# $botLeave
desc
### Использование
```php
$botLeave[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$botLeave',
  code: `
$botLeave[guildId?]`
// Возвращает: ...
})
```