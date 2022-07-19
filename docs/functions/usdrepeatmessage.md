# $repeatMessage
desc
### Использование
```php
$repeatMessage[time;text]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да | 
| text |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$repeatMessage',
  code: `
$repeatMessage[time;text]`
// Возвращает: ...
})
```