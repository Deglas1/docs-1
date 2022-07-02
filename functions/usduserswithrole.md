# $usersWithRole
desc
### Использование
```php
$usersWithRole[roleID;guildID?;option?;sep?;']
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleID |  |  | Да | 
| guildID |  |  | Нет | 
| option |  |  | Нет |
| sep |  |  | Нет |
| ' |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$usersWithRole',
  code: `
$usersWithRole[roleID;guildID?;option?;sep?;']`
// Возвращает: ...
})
```