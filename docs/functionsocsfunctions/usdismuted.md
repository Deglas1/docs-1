# $isMuted
desc
### Использование
```php
$isMuted[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isMuted',
  code: `
$isMuted[userId?;guildId?]`
// Возвращает: ...
})
```