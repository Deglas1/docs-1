# $guildChannels
desc
### Использование
```php
$guildChannels[guildId?;option?;sep?;']
```

### Опции

| Опция | Описание | Тип | Обязательно |
|--------|-------------|------|----------|
| guildId |  |  | Нет | 
| option |  |  | Нет | 
| sep |  |  | Нет |
| ' |  |  | Да |
## Пример(ы)

```javascript
bot.command({
  name: '$guildChannels',
  code: `
$guildChannels[guildId?;option?;sep?;']`
// Возвращает: ...
})
```