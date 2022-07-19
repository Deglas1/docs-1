# $defaultMessageNotification
desc
### Использование
```php
$defaultMessageNotification[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$defaultMessageNotification',
  code: `
$defaultMessageNotification[guildId?]`
// Возвращает: ...
})
```