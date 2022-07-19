# $serverContentFilter
desc
### Использование
```php
$serverContentFilter[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverContentFilter',
  code: `
$serverContentFilter[guildId?]`
// Возвращает: ...
})
```