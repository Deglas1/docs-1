# $eventData
desc
### Использование
```php
$eventData[data.result]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| data.result |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$eventData',
  code: `
$eventData[data.result]`
// Возвращает: ...
})
```