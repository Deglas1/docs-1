# $arrayConcat
desc
### Использование
```php
$arrayConcat[separator;...name]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| separator |  |  | Да | 
| ...name |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$arrayConcat',
  code: `
$arrayConcat[separator;...name]`
// Возвращает: ...
})
```