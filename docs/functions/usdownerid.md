# $ownerId
desc
### Использование
```php
$ownerId[guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет |  
## Пример(ы)

```javascript
bot.command({
  name: '$ownerId',
  code: `
$ownerId[guildId?]`
// Возвращает: ...
})
```