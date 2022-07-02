# $addApplicationCommandPermissions
desc
### Использование
```php
$addApplicationCommandPermissions[guildId?;id;...perms]
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
  name: '$addApplicationCommandPermissions',
  code: `
$addApplicationCommandPermissions[$guildID;972413555930972170;+admin]`
})
```
```javascript
bot.command({
  name: '$addApplicationCommandPermissions',
  code: `
$addApplicationCommandPermissions[$guildID;972413555930972170;-admin]`
})
```