# $addObjectProperty
desc
### Использование
```php
$addObjectProperty[name;value]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| value |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$addObjectProperty',
  code: `
$addObjectProperty[name;value]`
// Возвращает: ...
})
```