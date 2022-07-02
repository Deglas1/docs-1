# $playPrevious
desc
### Использование
```php
$playPrevious[type;track]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| type |  |  | Да | 
| track |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$playPrevious',
  code: `
$playPrevious[type;track]`
// Возвращает: ...
})
```