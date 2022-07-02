# $globalUserLeaderBoard
desc
### Использование
```php
$globalUserLeaderBoard[variable;type?;custom?;list?;page?;table?;]
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
  name: '$globalUserLeaderBoard',
  code: `
$globalUserLeaderBoard[variable;type?;custom?;list?;page?;table?;]`
// Возвращает: ...
})
```