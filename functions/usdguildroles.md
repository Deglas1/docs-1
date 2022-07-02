# $guildRoles
desc
### Использование
```php
$guildRoles[guildID?;type?;sep?;";removeManagedRoles?;fetch?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| type |  |  | Нет | 
| sep |  |  | Нет |
| " |  |  | Да |
| removeManagedRoles |  |  | Нет |
| fetch |  |  | Нет |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$guildRoles',
  code: `
$guildRoles[guildID?;type?;sep?;";removeManagedRoles?;fetch?;]`
// Возвращает: ...
})
```