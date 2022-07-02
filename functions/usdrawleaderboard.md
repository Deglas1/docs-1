# $rawLeaderboard
desc
### Использование
```php
$rawLeaderboard[variable;order?;type?;custom?;list?;page?;table?;]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| variable |  |  | Да | 
| order |  |  | Нет | 
| type |  |  | Нет |
| custom |  |  | Нет |
| list |  |  | Нет |
| page |  |  | Нет |
| table |  |  | Нет |
|  |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$rawLeaderboard',
  code: `
$rawLeaderboard[variable;order?;type?;custom?;list?;page?;table?;]`
// Возвращает: ...
})
```