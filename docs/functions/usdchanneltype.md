# $channelType
desc
### Использование
```php
$channelType[channelID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$channelType',
  code: `
$channelType[channelID?]`
// Возвращает: ...
})
```