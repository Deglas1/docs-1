# $botCount
desc
### Использование
```php
$botCount[guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$botCount',
  code: `
$botCount[guildID?]`
// Возвращает: ...
})
```