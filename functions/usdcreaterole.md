# $createRole
desc
### Использование
```php
$createRole[guildId;returnId?;name;color;hoist?;position;mentionable?;...permissions]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| returnId |  |  | Нет | 
| name |  |  | Да |
| color |  |  | Да |
| hoist |  |  | Нет |
| position |  |  | Да |
| mentionable |  |  | Нет |
| ...permissions |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$createRole',
  code: `
$createRole[guildId;returnId?;name;color;hoist?;position;mentionable?;...permissions]`
// Возвращает: ...
})
```