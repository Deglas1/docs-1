# $lowestRole
desc
### Использование
```php
$lowestRole[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$lowestRole',
  code: `
$lowestRole[userId?;guildId?]`
// Возвращает: ...
})
```