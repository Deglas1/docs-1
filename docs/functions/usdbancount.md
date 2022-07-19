# $banCount
desc
### Использование
```php
$banCount[guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$banCount',
  code: `
$banCount[guildID?]`
// Возвращает: ...
})
```