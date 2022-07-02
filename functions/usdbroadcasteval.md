# $broadcastEval
desc
### Использование
```php
$broadcastEval[func]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| func |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$broadcastEval',
  code: `
$broadcastEval[func]`
// Возвращает: ...
})
```