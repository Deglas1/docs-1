# $checkCondition
desc
### Использование
```php
$checkCondition[condition]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| condition |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$checkCondition',
  code: `
$checkCondition[condition]`
// Возвращает: ...
})
```