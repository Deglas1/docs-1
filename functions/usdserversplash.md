# $serverSplash
desc
### Использование
```php
$serverSplash[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverSplash',
  code: `
$serverSplash[guildId?]`
// Возвращает: ...
})
```