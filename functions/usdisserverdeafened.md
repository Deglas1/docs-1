# $isServerDeafened
desc
### Использование
```php
$isServerDeafened[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isServerDeafened',
  code: `
$isServerDeafened[userId?;guildId?]`
// Возвращает: ...
})
```