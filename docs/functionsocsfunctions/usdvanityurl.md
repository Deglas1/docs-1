# $vanityURL
desc
### Использование
```php
$vanityURL[guildID?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildID |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$vanityURL',
  code: `
$vanityURL[guildID?]`
// Возвращает: ...
})
```