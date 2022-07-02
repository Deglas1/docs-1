# $forEachUser
desc
### Использование
```php
$forEachUser[time?;awaitData;...cmds]
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
  name: '$forEachUser',
  code: `
$forEachUser[time?;awaitData;...cmds]`
// Возвращает: ...
})
```