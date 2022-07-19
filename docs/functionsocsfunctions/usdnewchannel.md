# $newChannel
desc
### Использование
```php
$newChannel[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$newChannel',
  code: `
$newChannel[option?]`
// Возвращает: ...
})
```