# $killShard
desc
### Использование
```php
$killShard[shardId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| shardId |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$killShard',
  code: `
$killShard[shardId]`
// Возвращает: ...
})
```