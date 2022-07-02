# $createStageInstance
desc
### Использование
```php
$createStageInstance[channelId;topic;privacy?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| topic |  |  | Да | 
| privacy |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$createStageInstance',
  code: `
$createStageInstance[channelId;topic;privacy?]`
// Возвращает: ...
})
```