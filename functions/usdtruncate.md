# $truncate
desc
### Использование
```php
$truncate[number]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| number |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$truncate',
  code: `
$truncate[number]`
// Возвращает: ...
})
```