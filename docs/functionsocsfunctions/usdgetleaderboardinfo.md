# $getLeaderboardInfo
desc
### Использование
```php
$getLeaderboardInfo[variable;id;type?;option?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| variable |  |  | Да | 
| id |  |  | Да | 
| type |  |  | Нет |
| option |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$getLeaderboardInfo',
  code: `
$getLeaderboardInfo[variable;id;type?;option?]`
// Возвращает: ...
})
```