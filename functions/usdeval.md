# $eval
desc
### Использование
```php
$eval[Code;returnCode?;sendMessage?;returnExecution?;returnId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| Code |  |  | Да | 
| returnCode |  |  | Нет | 
| sendMessage |  |  | Нет |
| returnExecution |  |  | Нет |
| returnId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$eval',
  code: `
$eval[Code;returnCode?;sendMessage?;returnExecution?;returnId?]`
// Возвращает: ...
})
```