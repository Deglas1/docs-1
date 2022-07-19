# $componentCollector
desc
### Использование
```php
$componentCollector[messageID;filter;time;customIDs;cmds;errorMsg?;endcommand?;awaitData?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageID |  |  | Да | 
| filter |  |  | Да | 
| time |  |  | Да |
| customIDs |  |  | Да |
| cmds |  |  | Да |
| errorMsg |  |  | Нет |
| endcommand |  |  | Нет |
| awaitData |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$componentCollector',
  code: `
$componentCollector[messageID;filter;time;customIDs;cmds;errorMsg?;endcommand?;awaitData?]`
// Возвращает: ...
})
```