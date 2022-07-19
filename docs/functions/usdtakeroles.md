# $takeRoles
desc
### Использование
```php
$takeRoles[guildId;userId;...roleId]
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
  name: '$takeRoles',
  code: `
$takeRoles[guildId;userId;...roleId]`
// Возвращает: ...
})
```