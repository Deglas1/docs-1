# $highestRole
desc
### Использование
```php
$highestRole[userId?;guildId?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
| option |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$highestRole',
  code: `
$highestRole[userId?;guildId?;option?]`
// Возвращает: ...
})
```