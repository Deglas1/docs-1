# $randomText
desc
### Использование
```php
$randomText[...words]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| ...words |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$randomText',
  code: `
$randomText[...words]`
// Возвращает: ...
})
```