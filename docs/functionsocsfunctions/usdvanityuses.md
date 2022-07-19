# $vanityUses
desc
### Использование
```php
$vanityUses[guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$vanityUses',
  code: `
$vanityUses[guildID?]`
// Возвращает: ...
})
```