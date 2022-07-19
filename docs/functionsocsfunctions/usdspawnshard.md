# $spawnShard
desc
### Использование
```php
$spawnShard[shardId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| shardId |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$spawnShard',
  code: `
$spawnShard[shardId]`
// Возвращает: ...
})
```