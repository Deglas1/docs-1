# $newTicket
desc
### Использование
```php
$newTicket[name;msg?;place?;returnId?;error]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| msg |  |  | Нет | 
| place |  |  | Нет |
| returnId |  |  | Нет |
| error |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$newTicket',
  code: `
$newTicket[name;msg?;place?;returnId?;error]`
// Возвращает: ...
})
```