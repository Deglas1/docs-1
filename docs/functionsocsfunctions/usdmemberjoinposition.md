# $memberJoinPosition
desc
### Использование
```php
$memberJoinPosition[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$memberJoinPosition',
  code: `
$memberJoinPosition[userId?;guildId?]`
// Возвращает: ...
})
```