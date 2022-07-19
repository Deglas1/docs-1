# $userPerms
desc
### Использование
```php
$userPerms[userID?;sep?;';guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| userID |  |  | Нет | 
| sep |  |  | Нет | 
| ' |  |  | Да |
| guildID |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$userPerms',
  code: `
$userPerms[userID?;sep?;';guildID?]`
// Возвращает: ...
})
```