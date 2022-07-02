# $takeRole
desc
### Использование
```php
$takeRole[guildId;userId;roleId]
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
  name: '$takeRole',
  code: `
$takeRole[guildId;userId;roleId]`
// Возвращает: ...
})
```