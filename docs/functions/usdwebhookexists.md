# $webhookExists
desc
### Использование
```php
$webhookExists[id]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| id |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$webhookExists',
  code: `
$webhookExists[id]`
// Возвращает: ...
})
```