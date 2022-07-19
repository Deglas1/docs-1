# $songRawInfo
desc
### Использование
```php
$songRawInfo[response?;position?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| response |  |  | Нет | 
| position |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$songRawInfo',
  code: `
$songRawInfo[response?;position?]`
// Возвращает: ...
})
```