# $blacklistOnlyCommands
desc
### Использование
```php
$blacklistOnlyCommands[...cmds]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...cmds |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$blacklistOnlyCommands',
  code: `
$blacklistOnlyCommands[...cmds]`
// Возвращает: ...
})
```