# $mutualServers
desc
### Использование
```php
$mutualServers[userId?;sep?;']
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| sep |  |  | Нет | 
| ' |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$mutualServers',
  code: `
$mutualServers[userId?;sep?;']`
// Возвращает: ...
})
```