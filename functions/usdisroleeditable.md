# $isRoleEditable
desc
### Использование
```php
$isRoleEditable[roleId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isRoleEditable',
  code: `
$isRoleEditable[roleId;guildId?]`
// Возвращает: ...
})
```