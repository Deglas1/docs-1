# $giveRoles
desc
### Использование
```php
$giveRoles[guildId;userId;...roleId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| userId |  |  | Да | 
| ...roleId |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$giveRoles',
  code: `
$giveRoles[guildId;userId;...roleId]`
// Возвращает: ...
})
```