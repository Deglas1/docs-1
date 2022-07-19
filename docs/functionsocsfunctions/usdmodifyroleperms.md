# $modifyRolePerms
desc
### Использование
```php
$modifyRolePerms[guildId;roleId;...perms]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| roleId |  |  | Да | 
| ...perms |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$modifyRolePerms',
  code: `
$modifyRolePerms[guildId;roleId;...perms]`
// Возвращает: ...
})
```