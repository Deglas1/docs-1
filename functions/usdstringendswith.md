# $stringEndsWith
desc
### Использование
```php
$stringEndsWith[text;check]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| check |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$stringEndsWith',
  code: `
$stringEndsWith[text;check]`
// Возвращает: ...
})
```