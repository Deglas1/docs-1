# $hasAnyRole
desc
### Использование
```php
$hasAnyRole[guildId;userId;...roles]
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
  name: '$hasAnyRole',
  code: `
$hasAnyRole[guildId;userId;...roles]`
// Возвращает: ...
})
```