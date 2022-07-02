# $shardPing
desc
### Использование
```php
$shardPing[shardId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| shardId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$shardPing',
  code: `
$shardPing[shardId?]`
// Возвращает: ...
})
```