# $message
desc
### Использование
```php
$message[args]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| args |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$message',
  code: `
$message[args]`
// Возвращает: ...
})
```