# $getMessage
desc
### Использование
```php
$getMessage[channelId?;messageId?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет | 
| messageId |  |  | Нет | 
| option |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getMessage',
  code: `
$getMessage[channelId?;messageId?;option?]`
// Возвращает: ...
})
```