# $findChannel
desc
### Использование
```php
$findChannel[channelResolver;returnSelf?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| channelResolver |  |  | Да | 
| returnSelf |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$findChannel',
  code: `
$findChannel[channelResolver;returnSelf?]`
// Возвращает: ...
})
```