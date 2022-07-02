# $modifyRole
desc
### Использование
```php
$modifyRole[guildId;roleId;...roleDatas]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| roleId |  |  | Да | 
| ...roleDatas |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$modifyRole',
  code: `
$modifyRole[guildId;roleId;...roleDatas]`
// Возвращает: ...
})
```