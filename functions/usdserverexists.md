# $serverExists
desc
### Использование
```php
$serverExists[guildId]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverExists',
  code: `
$serverExists[guildId]`
// Возвращает: ...
})
```