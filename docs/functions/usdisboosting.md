# $isBoosting
desc
### Использование
```php
$isBoosting[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isBoosting',
  code: `
$isBoosting[userId?;guildId?]`
// Возвращает: ...
})
```