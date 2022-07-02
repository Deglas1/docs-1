# $roleExists
desc
### Использование
```php
$roleExists[roleId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$roleExists',
  code: `
$roleExists[roleId;guildId?]`
// Возвращает: ...
})
```