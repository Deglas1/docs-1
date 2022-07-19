# $getChannelVar
desc
### Использование
```php
$getChannelVar[varname;channelID?;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| channelID |  |  | Нет | 
| table |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getChannelVar',
  code: `
$getChannelVar[varname;channelID?;table?]`
// Возвращает: ...
})
```