# $forEachGuildChannel
desc
### Использование
```php
$forEachGuildChannel[time?;awaitData;...cmds]
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
  name: '$forEachGuildChannel',
  code: `
$forEachGuildChannel[time?;awaitData;...cmds]`
// Возвращает: ...
})
```