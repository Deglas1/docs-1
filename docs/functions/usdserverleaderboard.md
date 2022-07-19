# $serverLeaderBoard
desc
### Использование
```php
$serverLeaderBoard[variable;type?;custom?;list?;page?;table?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| variable |  |  | Да | 
| type |  |  | Нет | 
| custom |  |  | Нет |
| list |  |  | Нет |
| page |  |  | Нет |
| table |  |  | Нет |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$serverLeaderBoard',
  code: `
$serverLeaderBoard[variable;type?;custom?;list?;page?;table?;]`
// Возвращает: ...
})
```