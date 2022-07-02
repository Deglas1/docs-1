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
$authorBanner[size?;dynamic?;format?]`
// Возвращает: ...
})
```