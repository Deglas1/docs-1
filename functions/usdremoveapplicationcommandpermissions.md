# $removeApplicationCommandPermissions
desc
### Использование
```php
$removeApplicationCommandPermissions[guildId?;id;...roruids]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| id |  |  | Да | 
| ...roruids |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$removeApplicationCommandPermissions',
  code: `
$removeApplicationCommandPermissions[guildId?;id;...roruids]`
// Возвращает: ...
})
```