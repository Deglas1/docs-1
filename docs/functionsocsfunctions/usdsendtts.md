# $sendTTS
desc
### Использование
```php
$sendTTS[channelId;message;returnId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| message |  |  | Да | 
| returnId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$sendTTS',
  code: `
$sendTTS[channelId;message;returnId?]`
// Возвращает: ...
})
```