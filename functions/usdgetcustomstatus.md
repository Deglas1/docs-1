# $getCustomStatus
desc
### Использование
```php
$getCustomStatus[userId?;guildId?;type?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
| type |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getCustomStatus',
  code: `
$getCustomStatus[userId?;guildId?;type?]`
// Возвращает: ...
})
```