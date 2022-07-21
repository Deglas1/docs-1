# $status
desc
### Использование
```php
$status[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$status',
  code: `
$status[userId?;guildId?]`
// Возвращает: dnd, online, invisible, idle
})
```
