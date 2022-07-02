# $newVariable
desc
### Использование
```php
$newVariable[opt;seperator?;"]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| opt |  |  | Да | 
| seperator |  |  | Нет | 
| " |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$newVariable',
  code: `
$newVariable[opt;seperator?;"]`
// Возвращает: ...
})
```