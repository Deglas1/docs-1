# $clear
desc
### Использование
```php
$clear[amt;filter?;returnCount?;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| amt |  |  | Да | 
| filter |  |  | Нет | 
| returnCount |  |  | Нет |
| channelId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$clear',
  code: `
$clear[amt;filter?;returnCount?;channelId?]`
// Возвращает: ...
})
```