# $getEmbed
desc
### Использование
```php
$getEmbed[channelId?;messageId?;index?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Нет | 
| messageId |  |  | Нет | 
| index |  |  | Нет |
| option |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getEmbed',
  code: `
$getEmbed[channelId?;messageId?;index?;option?]`
// Возвращает: ...
})
```