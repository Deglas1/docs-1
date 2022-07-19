# $serverIds
desc
### Использование
```php
$serverIds[sep]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| sep |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverIds',
  code: `
$serverIds[sep]`
// Возвращает: ...
})
```