# $serverBanner
desc
### Использование
```php
$serverBanner[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$serverBanner',
  code: `
$serverBanner[guildId?]`
// Возвращает: ...
})
```