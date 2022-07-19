# $deleteMessage
desc
### Использование
```php
$deleteMessage[messageId;channel?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Да | 
| channel |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$deleteMessage',
  code: `
$deleteMessage[messageId;channel?]`
// Возвращает: ...
})
```