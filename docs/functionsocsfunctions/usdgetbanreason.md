# $getBanReason
desc
### Использование
```php
$getBanReason[guildID?;userID?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| userID |  |  | Нет | 
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$getBanReason',
  code: `
$getBanReason[guildID?;userID?;]`
// Возвращает: ...
})
```