# $toLowerCase
desc
### Использование
```php
$toLowerCase[text]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| text |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$toLowerCase',
  code: `
$toLowerCase[text]`
// Возвращает: ...
})
```