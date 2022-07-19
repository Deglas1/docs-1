# $stringStartsWith
desc
### Использование
```php
$stringStartsWith[text;check]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да | 
| check |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$stringStartsWith',
  code: `
$stringStartsWith[text;check]`
// Возвращает: ...
})
```