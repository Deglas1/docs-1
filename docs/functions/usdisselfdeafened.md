# $isSelfDeafened
desc
### Использование
```php
$isSelfDeafened[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isSelfDeafened',
  code: `
$isSelfDeafened[userId?;guildId?]`
// Возвращает: ...
})
```