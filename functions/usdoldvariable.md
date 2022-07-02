# $oldVariable
desc
### Использование
```php
$oldVariable[opt;seperator?;"]
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
  name: '$oldVariable',
  code: `
$oldVariable[opt;seperator?;"]`
// Возвращает: ...
})
```