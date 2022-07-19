# $channelCooldown
desc
### Использование
```php
$channelCooldown[time;errorObject?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| errorObject |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$channelCooldown',
  code: `
$channelCooldown[time;errorObject?]`
// Возвращает: ...
})
```