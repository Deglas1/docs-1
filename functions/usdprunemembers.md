# $pruneMembers
desc
### Использование
```php
$pruneMembers[days?;guildId?;roleIds;dry?;reason;count?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| days |  |  | Нет | 
| guildId |  |  | Нет | 
| roleIds |  |  | Да |
| dry |  |  | Нет |
| reason |  |  | Да |
| count |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$pruneMembers',
  code: `
$pruneMembers[days?;guildId?;roleIds;dry?;reason;count?]`
// Возвращает: ...
})
```