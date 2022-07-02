# $setGuildIcon
desc
### Использование
```php
$setGuildIcon[avatar;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| avatar |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$setGuildIcon',
  code: `
$setGuildIcon[avatar;guildId?]`
// Возвращает: ...
})
```