# $isSelfMuted
desc
### Использование
```php
$isSelfMuted[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isSelfMuted',
  code: `
$isSelfMuted[userId?;guildId?]`
// Возвращает: ...
})
```