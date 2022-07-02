# $cacheMembers
desc
### Использование
```php
$cacheMembers[guildId?;returnCount?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| returnCount |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$cacheMembers',
  code: `
$cacheMembers[guildId?;returnCount?]`
// Возвращает: ...
})
```