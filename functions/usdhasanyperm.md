# $hasAnyPerm
desc
### Использование
```php
$hasAnyPerm[guildId;userId;...perms]
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
  name: '$hasAnyPerm',
  code: `
$hasAnyPerm[guildId;userId;...perms]`
// Возвращает: ...
})
```