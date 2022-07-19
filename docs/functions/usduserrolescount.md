# $userRolesCount
desc
### Использование
```php
$userRolesCount[userID?;guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет | 
| guildID |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$userRolesCount',
  code: `
$userRolesCount[userID?;guildID?]`
// Возвращает: ...
})
```