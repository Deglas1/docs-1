# $channelPermissionsFor
desc
### Использование
```php
$channelPermissionsFor[uorrId?;channelId?;sep?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| uorrId |  |  | Нет | 
| channelId |  |  | Нет | 
| sep |  |  | Нет |
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$channelPermissionsFor',
  code: `
$channelPermissionsFor[uorrId?;channelId?;sep?;"]`
// Возвращает: ...
})
```