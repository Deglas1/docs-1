# $hasPerms
desc
### Использование
```php
$hasPerms[guildId;userId;...perms]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| userId |  |  | Да | 
| ...perms |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$hasPerms',
  code: `
$hasPerms[guildId;userId;...perms]`
// Возвращает: ...
})
```