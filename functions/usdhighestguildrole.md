# $highestGuildRole
desc
### Использование
```php
$highestGuildRole[guildId?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| option |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$highestGuildRole',
  code: `
$highestGuildRole[guildId?;option?]`
// Возвращает: ...
})
```