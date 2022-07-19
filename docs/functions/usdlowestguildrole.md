# $lowestGuildRole
desc
### Использование
```php
$lowestGuildRole[guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$lowestGuildRole',
  code: `
$lowestGuildRole[guildID?]`
// Возвращает: ...
})
```