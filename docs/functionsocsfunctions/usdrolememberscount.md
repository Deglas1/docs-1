# $roleMembersCount
desc
### Использование
```php
$roleMembersCount[roleId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$roleMembersCount',
  code: `
$roleMembersCount[roleId;guildId?]`
// Возвращает: ...
})
```