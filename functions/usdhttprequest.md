# $httpRequest
desc
### Использование
```php
$httpRequest[url;method?;body?;property;error?;...header]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| url |  |  | Да | 
| method |  |  | Нет | 
| body |  |  | Нет |
| property |  |  | Да |
| error |  |  | Нет |
| ...header |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$httpRequest',
  code: `
$httpRequest[url;method?;body?;property;error?;...header]`
// Возвращает: ...
})
```