# $getUserBanner
desc
### Использование
```php
$getUserBanner[userId;size?;dynamic?;format?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Да | 
| size |  |  | Нет | 
| dynamic |  |  | Нет |
| format |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getUserBanner',
  code: `
$getUserBanner[userId;size?;dynamic?;format?]`
// Возвращает: ...
})
```