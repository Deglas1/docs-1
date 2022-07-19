# $getUserAccentColor
desc
### Использование
```php
$getUserAccentColor[userId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$getUserAccentColor',
  code: `
$getUserAccentColor[userId]`
// Возвращает: ...
})
```