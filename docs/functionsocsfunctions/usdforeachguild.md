# $forEachGuild
desc
### Использование
```php
$forEachGuild[time?;awaitData;...cmds]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Нет | 
| awaitData |  |  | Да | 
| ...cmds |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$forEachGuild',
  code: `
$forEachGuild[time?;awaitData;...cmds]`
// Возвращает: ...
})
```