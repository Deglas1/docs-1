# $memberJoinedDate
desc
### Использование
```php
$memberJoinedDate[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$memberJoinedDate',
  code: `
$memberJoinedDate[userId?;guildId?]`
// Возвращает: ...
})
```