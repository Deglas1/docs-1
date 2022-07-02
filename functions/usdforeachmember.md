# $forEachMember
desc
### Использование
```php
$forEachMember[time?;awaitData;...cmds]
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
  name: '$forEachMember',
  code: `
$forEachMember[time?;awaitData;...cmds]`
// Возвращает: ...
})
```