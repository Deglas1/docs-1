# $setApplicationCommandPermissions
desc
### Использование
```php
$setApplicationCommandPermissions[guildId?;id;...perms]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| id |  |  | Да | 
| ...perms |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$setApplicationCommandPermissions',
  code: `
$setApplicationCommandPermissions[guildId?;id;...perms]`
// Возвращает: ...
})
```