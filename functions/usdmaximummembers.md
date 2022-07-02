# $maximumMembers
desc
### Использование
```php
$maximumMembers[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$maximumMembers',
  code: `
$maximumMembers[guildId?]`
// Возвращает: ...
})
```