# $isBanned
desc
### Использование
```php
$isBanned[guildID?;userID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| userID |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isBanned',
  code: `
$isBanned[guildID?;userID?]`
// Возвращает: ...
})
```