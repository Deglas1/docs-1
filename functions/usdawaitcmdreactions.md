# $awaitCmdReactions
desc
### Использование
```php
$awaitCmdReactions[userfilter;time;reactions;commands;errorMsg?;awaitData?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userfilter |  |  | Да | 
| time |  |  | Да | 
| reactions |  |  | Да |
| commands |  |  | Да |
| errorMsg |  |  | Нет |
| awaitData |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$awaitCmdReactions',
  code: `
$awaitCmdReactions[userfilter;time;reactions;commands;errorMsg?;awaitData?]`
// Возвращает: ...
})
```