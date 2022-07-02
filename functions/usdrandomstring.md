# $randomString
desc
### Использование
```php
$randomString[range;diffExec?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| range |  |  | Да | 
| diffExec |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$randomString',
  code: `
$randomString[range;diffExec?]`
// Возвращает: ...
})
```