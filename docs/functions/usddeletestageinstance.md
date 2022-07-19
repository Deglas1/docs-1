# $deleteStageInstance
desc
### Использование
```php
$deleteStageInstance[channelID]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelID |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$deleteStageInstance',
  code: `
$deleteStageInstance[channelID]`
// Возвращает: ...
})
```