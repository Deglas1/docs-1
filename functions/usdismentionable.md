# $isMentionable
desc
### Использование
```php
$isMentionable[roleId;guildId?]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| roleId |  |  | Да | 
| guildId |  |  | Нет | 
## Пример(ы)

```javascript
bot.command({
  name: '$isMentionable',
  code: `
$isMentionable[roleId;guildId?]`
// Возвращает: ...
})
```