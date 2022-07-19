# $cloneChannel
desc
### Использование
```php
$cloneChannel[channelId?;name;returnId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет | 
| name |  |  | Да | 
| returnId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$cloneChannel',
  code: `
$cloneChannel[channelId?;name;returnId?]`
// Возвращает: ...
})
```