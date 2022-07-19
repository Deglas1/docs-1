# $multi
desc
### Использование
```php
$multi[...numbers]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...numbers |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$multi',
  code: `
$multi[...numbers]`
// Возвращает: ...
})
```