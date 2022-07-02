# $roleName
desc
### Использование
```php
$roleName[roleId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$roleName',
  code: `
$roleName[roleId;guildId?]`
// Возвращает: ...
})
```