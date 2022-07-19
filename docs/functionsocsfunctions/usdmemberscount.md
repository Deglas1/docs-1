# $membersCount
desc
### Использование
```php
$membersCount[guildId?;presence?;countBot?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| presence |  |  | Нет | 
| countBot |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$membersCount',
  code: `
$membersCount[guildId?;presence?;countBot?]`
// Возвращает: ...
})
```