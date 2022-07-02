# $rolePerms
desc
### Использование
```php
$rolePerms[roleId;sep?;';guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| sep |  |  | Нет | 
| ' |  |  | Да |
| guildId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$rolePerms',
  code: `
$rolePerms[roleId;sep?;';guildId?]`
// Возвращает: ...
})
```