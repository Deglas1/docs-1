# $unban
desc
### Использование
```php
$unban[guildID?;userID]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| userID |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$unban',
  code: `
$unban[guildID?;userID]`
// Возвращает: ...
})
```