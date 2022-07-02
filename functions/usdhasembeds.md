# $hasEmbeds
desc
### Использование
```php
$hasEmbeds[messageId?;channelId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| messageId |  |  | Нет | 
| channelId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$hasEmbeds',
  code: `
$hasEmbeds[messageId?;channelId?]`
// Возвращает: ...
})
```