# $userRoleColor
desc
### Использование
```php
$userRoleColor[userID?;guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет | 
| guildID |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$userRoleColor',
  code: `
$userRoleColor[userID?;guildID?]`
// Возвращает: ...
})
```