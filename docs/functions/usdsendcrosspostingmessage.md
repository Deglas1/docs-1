# $sendCrosspostingMessage
desc
### Использование
```php
$sendCrosspostingMessage[msg;...channelIds]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| msg |  |  | Да | 
| ...channelIds |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$sendCrosspostingMessage',
  code: `
$sendCrosspostingMessage[msg;...channelIds]`
// Возвращает: ...
})
```