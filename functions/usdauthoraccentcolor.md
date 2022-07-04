# $authorAccentColor
desc
### Использование
```php
$authorAccentColor[def?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| def |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$authorAccentColor',
  code: `
$authorAccentColor[yes]`
// Возвращает: #ff0000
})
```