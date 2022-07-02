# $argsCheck
desc
### Использование
```php
$argsCheck[condition;errorMessage?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| condition |  |  | Да | 
| errorMessage |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$argsCheck',
  code: `
$argsCheck[condition;errorMessage?]`
// Возвращает: ...
})
```