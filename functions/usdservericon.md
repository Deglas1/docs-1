# $serverIcon
desc
### Использование
```php
$serverIcon[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverIcon',
  code: `
$serverIcon[guildId?]`
// Возвращает: ...
})
```