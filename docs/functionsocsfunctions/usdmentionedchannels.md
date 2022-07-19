# $mentionedChannels
desc
### Использование
```php
$mentionedChannels[index;returnSelf?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| index |  |  | Да | 
| returnSelf |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$mentionedChannels',
  code: `
$mentionedChannels[index;returnSelf?]`
// Возвращает: ...
})
```