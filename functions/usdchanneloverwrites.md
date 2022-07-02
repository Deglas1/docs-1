# $channelOverwrites
desc
### Использование
```php
$channelOverwrites[channelID?;response?;sep?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelID |  |  | Нет | 
| response |  |  | Нет | 
| sep |  |  | Нет |
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$channelOverwrites',
  code: `
$channelOverwrites[channelID?;response?;sep?;"]`
// Возвращает: ...
})
```