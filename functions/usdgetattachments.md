# $getAttachments
desc
### Использование
```php
$getAttachments[channelId;messageId;index?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelId |  |  | Да | 
| messageId |  |  | Да | 
| index |  |  | Нет |
| option |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getAttachments',
  code: `
$getAttachments[channelId;messageId;index?;option?]`
// Возвращает: ...
})
```