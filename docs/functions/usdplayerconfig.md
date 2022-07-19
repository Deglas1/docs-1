# $playerConfig
desc
### Использование
```php
$playerConfig[leaveWhenDone?;leaveWhenDoneAfter?;seekWhenFilter?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| leaveWhenDone |  |  | Нет | 
| leaveWhenDoneAfter |  |  | Нет | 
| seekWhenFilter |  |  | Нет |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$playerConfig',
  code: `
$playerConfig[leaveWhenDone?;leaveWhenDoneAfter?;seekWhenFilter?;]`
// Возвращает: ...
})
```