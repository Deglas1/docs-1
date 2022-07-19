# $randomRoleId
desc
### Использование
```php
$randomRoleId[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$randomRoleId',
  code: `
$randomRoleId[guildId?]`
// Возвращает: ...
})
```