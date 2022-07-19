# $userLeaderBoard
desc
### Использование
```php
$userLeaderBoard[guildId;variable;type?;custom?;list?;page?;table?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| variable |  |  | Да | 
| type |  |  | Нет |
| custom |  |  | Нет |
| list |  |  | Нет |
| page |  |  | Нет |
| table |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$userLeaderBoard',
  code: `
$userLeaderBoard[guildId;variable;type?;custom?;list?;page?;table?]`
// Возвращает: ...
})
```