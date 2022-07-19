# $volume
desc
### Использование
```php
$volume[volume?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| volume |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$volume',
  code: `
$volume[volume?]`
// Возвращает: ...
})
```