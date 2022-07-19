# $deleteArray
desc
### Использование
```php
$deleteArray[name]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$deleteArray',
  code: `
$deleteArray[name]`
// Возвращает: ...
})
```