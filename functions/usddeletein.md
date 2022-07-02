# $deleteIn
desc
### Использование
```php
$deleteIn[time]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| time |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$deleteIn',
  code: `
$deleteIn[time]`
// Возвращает: ...
})
```