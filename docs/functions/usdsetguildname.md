# $setGuildName
desc
### Использование
```php
$setGuildName[name;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| name |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$setGuildName',
  code: `
$setGuildName[name;guildId?]`
// Возвращает: ...
})
```