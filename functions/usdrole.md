# $role
desc
### Использование
```php
$role[roleId;option?;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| option |  |  | Нет | 
| guildId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$role',
  code: `
$role[roleId;option?;guildId?]`
// Возвращает: ...
})
```