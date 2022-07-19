# $kick
desc
### Использование
```php
$kick[userId;guildId?;reason]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userId |  |  | Да | 
| guildId |  |  | Нет | 
| reason |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$kick',
  code: `
$kick[userId;guildId?;reason]`
// Возвращает: ...
})
```