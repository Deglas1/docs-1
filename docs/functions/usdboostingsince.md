# $boostingSince
desc
### Использование
```php
$boostingSince[guildID?;userID?;format?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет | 
| userID |  |  | Нет | 
| format |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$boostingSince',
  code: `
$boostingSince[guildID?;userID?;format?]`
// Возвращает: ...
})
```