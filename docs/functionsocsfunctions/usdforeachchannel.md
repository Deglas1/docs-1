# $forEachChannel
desc
### Использование
```php
$forEachChannel[time?;awaitData;...cmds]
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
  name: '$forEachChannel',
  code: `
$forEachChannel[time?;awaitData;...cmds]`
// Возвращает: ...
})
```