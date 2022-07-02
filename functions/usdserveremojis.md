# $serverEmojis
desc
### Использование
```php
$serverEmojis[sep?;";guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| sep |  |  | Нет | 
| " |  |  | Да | 
| guildId |  |  | Нет |
## Пример(ы)

```javascript
bot.command({
  name: '$serverEmojis',
  code: `
$serverEmojis[sep?;";guildId?]`
// Возвращает: ...
})
```