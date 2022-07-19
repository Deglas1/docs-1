# $arrayPush
desc
### Использование
```php
$arrayPush[name;...elements]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| ...elements |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$arrayPush',
  code: `
$arrayPush[name;...elements]`
// Возвращает: ...
})
```