# $isDeafen
desc
### Использование
```php
$isDeafen[userId?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Нет | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isDeafen',
  code: `
$isDeafen[userId?;guildId?]`
// Возвращает: ...
})
```