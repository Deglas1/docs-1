# $userRoles
desc
### Использование
```php
$userRoles[userID?;guildID?;option?;sep?;']
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет | 
| guildID |  |  | Нет | 
| option |  |  | Нет |
| sep |  |  | Нет |
| ' |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$userRoles',
  code: `
$userRoles[userID?;guildID?;option?;sep?;']`
// Возвращает: ...
})
```