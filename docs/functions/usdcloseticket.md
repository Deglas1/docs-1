# $closeTicket
desc
### Использование
```php
$closeTicket[error]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| error |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$closeTicket',
  code: `
$closeTicket[error]`
// Возвращает: ...
})
```