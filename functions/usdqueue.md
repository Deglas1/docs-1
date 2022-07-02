# $queue
desc
### Использование
```php
$queue[page?;limit?;response?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| page |  |  | Нет | 
| limit |  |  | Нет | 
| response |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$queue',
  code: `
$queue[page?;limit?;response?]`
// Возвращает: ...
})
```