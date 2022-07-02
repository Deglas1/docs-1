# $arraySort
desc
### Использование
```php
$arraySort[name;type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| type |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$arraySort',
  code: `
$arraySort[name;type?]`
// Возвращает: ...
})
```