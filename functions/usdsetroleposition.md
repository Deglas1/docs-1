# $setRolePosition
desc
### Использование
```php
$setRolePosition[roleId;newPosition;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| newPosition |  |  | Да | 
| guildId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$setRolePosition',
  code: `
$setRolePosition[roleId;newPosition;guildId?]`
// Возвращает: ...
})
```