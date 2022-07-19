# $slowmode
desc
### Использование
```php
$slowmode[time;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| channelId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$slowmode',
  code: `
$slowmode[time;channelId?]`
// Возвращает: ...
})
```