# $messageAttachment
desc
### Использование
```php
$messageAttachment[index?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| index |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$messageAttachment',
  code: `
$messageAttachment[index?]`
// Возвращает: ...
})
```