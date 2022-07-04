# $authorBanner
desc
### Использование
```php
$authorBanner[size?;dynamic?;format?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| size |  |  | Нет | 
| dynamic |  |  | Нет | 
| format |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$authorBanner',
  code: `
$authorBanner[1024;yes;gif]`
// Возвращает: ...
})
```