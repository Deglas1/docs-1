# $shardGuilds
desc
### Использование
```php
$shardGuilds[option?;sep?;";shardId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| option |  |  | Нет | 
| sep |  |  | Нет | 
| " |  |  | Да |
| shardId |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$shardGuilds',
  code: `
$shardGuilds[option?;sep?;";shardId]`
// Возвращает: ...
})
```