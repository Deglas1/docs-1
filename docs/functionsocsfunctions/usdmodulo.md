# $modulo
desc
### Использование
```php
$modulo[...numbers]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...numbers |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$modulo',
  code: `
$modulo[...numbers]`
// Возвращает: ...
})
```