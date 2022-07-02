# $giveRole
desc
### Использование
```php
$giveRole[guildId;userId;roleId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| userId |  |  | Да | 
| roleId |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$giveRole',
  code: `
$giveRole[guildId;userId;roleId]`
// Возвращает: ...
})
```