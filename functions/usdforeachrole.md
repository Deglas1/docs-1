# $forEachRole
desc
### Использование
```php
$forEachRole[guildId?;time?;awaitData;...cmds]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| time |  |  | Нет | 
| awaitData |  |  | Да |
| ...cmds |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$forEachRole',
  code: `
$forEachRole[guildId?;time?;awaitData;...cmds]`
// Возвращает: ...
})
```