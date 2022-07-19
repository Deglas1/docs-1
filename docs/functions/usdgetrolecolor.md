# $getRoleColor
desc
### Использование
```php
$getRoleColor[roleId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$getRoleColor',
  code: `
$getRoleColor[roleId;guildId?]`
// Возвращает: ...
})
```