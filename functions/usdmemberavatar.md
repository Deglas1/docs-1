# $memberAvatar
desc
### Использование
```php
$memberAvatar[guildId?;userId?;size?;dynamic?;format;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| userId |  |  | Нет | 
| size |  |  | Нет |
| dynamic |  |  | Нет |
| format |  |  | Да |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$memberAvatar',
  code: `
$memberAvatar[guildId?;userId?;size?;dynamic?;format;]`
// Возвращает: ...
})
```