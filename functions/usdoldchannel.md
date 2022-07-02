# $oldChannel
desc
### Использование
```php
$oldChannel[option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$oldChannel',
  code: `
$oldChannel[option?]`
// Возвращает: ...
})
```