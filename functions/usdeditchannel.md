# $editChannel
desc
### Использование
```php
$editChannel[channelId;...fields]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| ...fields |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$editChannel',
  code: `
$editChannel[channelId;...fields]`
// Возвращает: ...
})
```