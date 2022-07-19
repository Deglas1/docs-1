# $editGuild
desc
### Использование
```php
$editGuild[guildId;...guildDatas]
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Да | 
| ...guildDatas |  |  | Да | 
## Пример(ы)

```javascript
bot.command({
  name: '$editGuild',
  code: `
$editGuild[guildId;...guildDatas]`
// Возвращает: ...
})
```