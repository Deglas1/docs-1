# $deleteRoles
desc
### Использование
```php
$deleteRoles[guildId;...roles]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| ...roles |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$deleteRoles',
  code: `
$deleteRoles[guildId;...roles]`
// Возвращает: ...
})
```