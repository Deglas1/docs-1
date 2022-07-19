# $serverDescription
desc
### Использование
```php
$serverDescription[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverDescription',
  code: `
$serverDescription[guildId?]`
// Возвращает: ...
})
```