# $setChannelVar
desc
### Использование
```php
$setChannelVar[varname;value;channelId?;table?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| varname |  |  | Да | 
| value |  |  | Да | 
| channelId |  |  | Нет |
| table |  |  | Нет |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$setChannelVar',
  code: `
$setChannelVar[varname;value;channelId?;table?;]`
// Возвращает: ...
})
```