# $hasRoles
desc
### Использование
```php
$hasRoles[guildId;userId;...roles]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| userId |  |  | Да | 
| ...roles |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$hasRoles',
  code: `
$hasRoles[guildId;userId;...roles]`
// Возвращает: ...
})
```