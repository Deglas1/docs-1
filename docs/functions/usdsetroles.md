# $setRoles
desc
### Использование
```php
$setRoles[guildId;memberId;...roleIds]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| memberId |  |  | Да | 
| ...roleIds |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$setRoles',
  code: `
$setRoles[guildId;memberId;...roleIds]`
// Возвращает: ...
})
```