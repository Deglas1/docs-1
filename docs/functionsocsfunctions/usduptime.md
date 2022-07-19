# $uptime
desc
### Использование
```php
$uptime[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$uptime',
  code: `
$uptime[option?]`
// Возвращает: ...
})
```