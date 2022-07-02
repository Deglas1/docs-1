# $sendDm
desc
### Использование
```php
$sendDm[msg;userId?;returnId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| msg |  |  | Да | 
| userId |  |  | Нет | 
| returnId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$sendDm',
  code: `
$sendDm[msg;userId?;returnId?]`
// Возвращает: ...
})
```